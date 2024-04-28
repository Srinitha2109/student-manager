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



module.exports = coordApp;
