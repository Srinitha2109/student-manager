const express = require('express');
const studentApp = express.Router();

studentApp.get('/test-student', (req, res) => {
    res.send({message:'Testing student API'});
})




module.exports = studentApp;