const exp = require('express')
const app = exp();

//To parse the body of req
app.use(exp.json());

//Importing the APIs to server
const coordApp = require('./APIs/coord-api')
const studentApp = require('./APIs/student-api')

//importing mongoclint
const mongoClint = require('mongodb').MongoClient;

//Connecting to mongodb
mongoClint.connect('mongodb://localhost:27017/')
.then(client=>{
    //Getting db object
    const db = client.db('studentManager');
    //Getting collection object
    const coordCollection = db.collection('coordCollection');
    const studentCollection = db.collection('studentCollection');
    //Setting collection object to app to make it available to other APIs
    app.set('coordCollection',coordCollection);
    app.set('studentCollection',studentCollection);
    console.log('Connected to db');
})
.catch(err=>{
    console.log('Error in connecting to db',err);
});


//If path is coord-api then send request to coordApp
app.use('/coord-api',coordApp);
//If path is student-api then send request to studentApp
app.use('/student-api',studentApp);

app.use((err, req, res, next)=>{
    res.send({message:"Error",payload:err.message});
})

app.listen(4000,()=>{
    console.log('server is running on port 4000')
})