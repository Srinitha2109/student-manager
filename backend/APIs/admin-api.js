const exp = require('express');
const adminApp = exp.Router();
const expressAsyncHandler = require('express-async-handler');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let studentCollection, coordCollection, adminCollection;
adminApp.use((req,res,next)=>{
    studentCollection = req.app.get('studentCollection');
    coordCollection = req.app.get('coordCollection');
    adminCollection = req.app.get('adminCollection');
    next();
})

//admin login
adminApp.post('/login',expressAsyncHandler(async(req,res)=>{
    let admin = req.body;
    let dbAdmin = await adminCollection.findOne({email:admin.email});
    if(dbAdmin===null){
        res.send({message:'Invalid email'})
    }
    else{
        if(admin.password===dbAdmin.password){
            let signedToken = jwt.sign({email:admin.email},process.env.SECRET_KEY);
            res.send({message:'Login success',token:signedToken,payload:dbAdmin})
        }
        else{
            res.send({message:'Invalid password'})
        }
    }
}))

//student registration
adminApp.post('/student',expressAsyncHandler(async(req,res)=>{
    let student = req.body;
    //Check if student already exists
    let dbStudent = await studentCollection.findOne({email:student.email});
    //If student does not exist, insert student into database
    if(dbStudent===null){
        //Hash the password and replace the password field with the hashed password
        //Feature to implement: generate password and mail it to the student
        let hashedPwd = await bcryptjs.hash(student.password,8);
        student.password = hashedPwd;
        await studentCollection.insertOne(student);
        res.send({message:'Student Registered'})
    }
    else{
        res.send({message:'Student already exists'})
    }
}))

//coordinator registration
adminApp.post('/coord',expressAsyncHandler(async(req,res)=>{
    let coordinator = req.body;
    let dbCoordinator = await coordCollection.findOne({email:coordinator.email});
    if(dbCoordinator===null){
        let hashedPwd = await bcryptjs.hash(coordinator.password,8);
        coordinator.password = hashedPwd;
        await coordCollection.insertOne(coordinator);
        res.send({message:'Coordinator Registered'})
    }
    else{
        res.send({message:'Coordinator already exists'})
    }
}))

//search for a particular student
adminApp.get('/student/:rollno',expressAsyncHandler(async(req,res)=>{
    let rollno = req.params.rollno;
    let dbStudent = await studentCollection.findOne({rollno:rollno});
    if(dbStudent===null){
        res.send({message:'Student does not exist'})
    }
    else{
        res.send({message:'Student found',payload:dbStudent})
    }
}))

//search for a particular coordinator
adminApp.get('/coord/:rollno',expressAsyncHandler(async(req,res)=>{
    let rollno = req.params.rollno;
    let dbCoordinator = await coordCollection.findOne({rollno:rollno});
    if(dbCoordinator===null){
        res.send({message:'Coordinator does not exist'})
    }
    else{
        res.send({message:'Coordinator found',payload:dbCoordinator})
    }
}))


module.exports = adminApp;