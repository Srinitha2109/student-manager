const exp = require('express');
const coordApp = exp.Router();

//Get coordinator details
let coordCollection;
coordApp.use((req, res, next) => {
    coordCollection = req.app.get('coordCollection');
    next();
})

//coordinator login


//get students list



module.exports = coordApp;
