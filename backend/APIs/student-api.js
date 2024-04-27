const express = require('express');
const studentApp = express.Router();

//get student collection
let studentCollection;
studentApp.use((req, res, next) => {
    studentCollection = req.app.get('studentCollection');
    next();
})

//student login route





module.exports = studentApp;