const express = require('express');
const studentApp = express.Router();
const expressAsyncHandler = require('express-async-handler');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//get student collection
let studentCollection;
studentApp.use((req, res, next) => {
    studentCollection = req.app.get('studentCollection');
    announcementCollection = req.app.get('announcementCollection');
    next();
})

//student login route
studentApp.post('/login', expressAsyncHandler(async (req, res) => {
    let student = req.body;
    let dbstudent = await studentCollection.findOne({ email: student.email });
    if (dbstudent===null) {
        res.send({message: "Invalid email"});
    }
    else {
        let status = await bcryptjs.compare(student.password, dbstudent.password);
        if (status === false) {
            res.send({message: "Invalid password"});
        }
        else {
            let signedToken = jwt.sign({email: student.email}, process.env.SECRET_KEY);
            res.send({message:"Login success", token: signedToken, payload: dbstudent});
        }
    }
}))

//modify student details
studentApp.put('/update', expressAsyncHandler(async (req, res) => {
    let newStudent = req.body;
    let oldStudent = await studentCollection.findOne({email: newStudent.email});
    newStudent.password = oldStudent.password;
    let result = await studentCollection.updateOne({email: newStudent.email}, {$set: newStudent});
    console.log(result);
    res.send({message: "Student details updated"});
}))

//view announcements
studentApp.get('/announce',expressAsyncHandler(async(req,res)=>{
    let dbAnnouncements = await announcementCollection.find({}).toArray();
    res.send({message:'Announcements found',payload:dbAnnouncements})
}))




module.exports = studentApp;