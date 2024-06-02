const exp = require('express');
const coordApp = exp.Router();
const expressAsyncHandler = require('express-async-handler');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Get coordinator details
let coordCollection;
coordApp.use((req, res, next) => {
    coordCollection = req.app.get('coordCollection');
    announcementCollection = req.app.get('announcementCollection');
    next();
})

//coordinator login
coordApp.post('/login',expressAsyncHandler(async(req,res)=>{
    let coord = req.body;
    let dbCoord = await coordCollection.findOne({email:coord.email});
    if(dbCoord===null){
        res.send({message:"Invalid email"})
    }
    else{
        let status = await bcryptjs.compare(coord.password,dbCoord.password);
        if(status===false){
            res.send({message:"Invalid password"});
        }
        else{
            let signedToken = jwt.sign({email:coord.email},process.env.SECRET_KEY);
            res.send({message:"Login success",token:signedToken, payload:dbCoord});
        }
    }
}))


//get students list


//modify coord details
coordApp.put('/update',expressAsyncHandler(async(req,res)=>{
    let newCoord = req.body;
    let oldCoord = await coordCollection.findOne({email:newCoord.email});
    newCoord.password = oldCoord.password;
    let result = await coordCollection.updateOne({email: newCoord.email}, {$set: newCoord});
    console.log(result);
    res.send({message: "Coordinator details updated"});
}))

//add announcement
coordApp.post('/announce',expressAsyncHandler(async(req,res)=>{
    let body = req.body;
    await announcementCollection.insertOne(body);
    res.send({message:'Announcement added'})
}))

//view announcements
coordApp.get('/announce',expressAsyncHandler(async(req,res)=>{
    let dbAnnouncements = await announcementCollection.find({}).toArray();
    res.send({message:'Announcements found',payload:dbAnnouncements})
}))

module.exports = coordApp;
