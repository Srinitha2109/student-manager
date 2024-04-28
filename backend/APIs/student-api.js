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




module.exports = studentApp;