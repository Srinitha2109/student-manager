const exp = require('express')
const app = exp();




app.use((err, req, res, next)=>{
    res.send({error:err.message});
})

app.listen(4000,()=>{
    console.log('server is running on port 4000')
})