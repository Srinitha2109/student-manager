const exp = require('express')
const app = exp();
require('dotenv').config();

//To parse the body of req
app.use(exp.json());

//Importing the APIs to server
const coordApp = require('./APIs/coord-api')
const studentApp = require('./APIs/student-api')
const adminApp = require('./APIs/admin-api')

//importing mongoclint
const mongoClint = require('mongodb').MongoClient;

//Connecting to mongodb
mongoClint.connect(process.env.URL)
.then(client=>{
    //Getting db object
    const db = client.db('studentManager');
    //Getting collection object
    const coordCollection = db.collection('coordCollection');
    const studentCollection = db.collection('studentCollection');
    const adminCollection = db.collection('adminCollection');
    //Setting collection object to app to make it available to other APIs
    app.set('coordCollection',coordCollection);
    app.set('studentCollection',studentCollection);
    app.set('adminCollection',adminCollection);
    console.log('Connected to db');
})
.catch(err=>{
    console.log('Error in connecting to db',err);
});


//If path is coord-api then send request to coordApp
app.use('/coord-api',coordApp);
//If path is student-api then send request to studentApp
app.use('/student-api',studentApp);
//If path is admin-api then send request to adminApp
app.use('/admin-api',adminApp);

app.use((err, req, res, next)=>{
    res.send({message:"Error",payload:err.message});
})

app.listen(process.env.PORT,()=>{
    console.log('server is running...')
})