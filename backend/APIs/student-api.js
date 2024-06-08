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
    classCollection = req.app.get('classCollection');
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


//update details by adding profile picture
studentApp.put('/profile-photo', expressAsyncHandler(async (req, res) => {
    let newStudent = req.body;
    let result = await studentCollection.updateOne({email: newStudent.email}, {$set: {profilePhoto: newStudent.profilePhoto, hasPhoto: "true"}});
    //console.log(result);
    res.send({message: "Profile photo updated"});
}))

//get todos
studentApp.get('/todo/:email', expressAsyncHandler(async (req, res) => {
   let email = req.params.email;
   let dbstudent = await studentCollection.findOne({email: email});
   res.send({message: "Todos found", payload: dbstudent.todos});
}))
    
// add todos
studentApp.put('/todo/:email', expressAsyncHandler(async (req, res) => {
    let newTodo = req.body;
    let email = req.params.email;
    let result = await studentCollection.updateOne({email: email}, {$addToSet: {todos: newTodo}});
    //console.log(result);
    res.send({message: "Todo added"});
}))

//delete todos
studentApp.put('/todo/delete/:email', expressAsyncHandler(async (req, res) => {
    let email = req.params.email;
    let todo = req.body;
    let result = await studentCollection.updateOne({email: email}, {$pull: {todos: {todoId: todo.todoId}}});
    let dbstudent = await studentCollection.findOne({email: email});
    res.send({message: "Todo deleted", payload: dbstudent.todos});
}))

//complete todo
studentApp.put('/todo/edit/:email', expressAsyncHandler(async (req, res) => {
    let email = req.params.email;
    let todoObj = req.body;
    let result = await studentCollection.updateOne({email: email, "todos.todoId": todoObj.todoId}, {$set: {"todos.$.isCompleted": todoObj.isCompleted}});
    let student = await studentCollection.findOne({email: email});
    res.send({message: "Todo updated", payload: student.todos});
}))

//get the time table (class details)
studentApp.get('/classInfo/:classId', expressAsyncHandler(async (req, res) => {
    let classId = req.params.classId;
    let dbClassInfo = await classCollection.findOne({classId: classId});
    res.send({message: "Class details found", payload: dbClassInfo});
}))


module.exports = studentApp;