const jsonwebtoken = require('jsonwebtoken')
require('dotenv').config()

function verifyToken(req, res, next){
    const bearerToken = req.headers.authorization;
    if(!bearerToken){
        return res.send({message: "Unauthorised access, please log in!"})
    }
    const token = bearerToken.split(" ")[1];
    try{
        let decodedToken = jsonwebtoken.verify(token, process.env.SECRET_KEY);
        next();
    }
    catch(err){
        next(err)
    }
}

module.exports = verifyToken;