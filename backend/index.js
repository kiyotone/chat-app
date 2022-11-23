const express = require('express');

const app = express();
const port = 4000;

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})



app.listen(port,(req,res)=>{

    

})