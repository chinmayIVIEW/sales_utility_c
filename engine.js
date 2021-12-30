const express = require("express")
const app = express()
require("dotenv").config()
const db = require('./models/index.js')
const contact = require('./router/profile.router')
const port = process.env.PORT || 8000

app.use(express.urlencoded({extended:true}))
app.use(express.json())




app.use((req, res, next) => {
    //allow access from every, elminate CORS
    res.setHeader('Access-Control-Allow-Origin','*');
    res.removeHeader('x-powered-by');
    //set the allowed HTTP methods to be requested
    res.setHeader('Access-Control-Allow-Methods','POST');
    //headers clients can use in their requests
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //allow request to continue and be handled by routes
    next();
  });




app.use('/api',contact)

  
app.get('/',(req,res)=>{
    res.json({
        message:"you are in the home page"
    })
})



db.sequelize.sync({force:false})
.then(()=>{
    console.log("table created")
})
.catch(err=>{
    console.log(err);
})





app.listen(port,()=>{
    console.log("server up and running")
})