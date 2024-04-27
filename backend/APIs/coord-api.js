const exp = require('express');
const coordApp = exp.Router();

coordApp.get('/test-coord', (req, res) => {
    res.send({message: "Testing Coord API"});
})



module.exports = coordApp;
