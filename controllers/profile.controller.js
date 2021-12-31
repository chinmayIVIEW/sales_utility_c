const db =  require('../models/index')
const Profile = db.profile
const nodemailer = require('nodemailer')
require("dotenv").config()
const {USER,PASS} = require('./gmail.cred')



const contact = async(req,res)=>{
    res.set('Access-Control-Allow-Origin', ' https://gifted-edison-2d44d6.netlify.app')
    try {
        let data = await Profile.create({full_name:req.body.full_name,company_name:req.body.company_name,
            email:req.body.email,subject:req.body.subject,messages:req.body.message})
            if (data) {
                res.status(200).json({
                    message: "Data inserted Successfully !!!"
                })
            }else{
                res.status(503).json({
                    message: "Oops !! Something went wrong"
                })
            } 
    } catch (error) {
        console.log(error);
    }

    if(req.body.checkbox == true){
        let transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : USER,
                pass : PASS
            }
        })
        let mailOptions = {
            from: USER,
            to: req.body.email,
            subject: 'your request deatails',
            text: `Name : ${req.body.full_name},
                   Company name : ${req.body.company_name},
                   Email id : ${req.body.email},
                   Subject : ${req.body.subject},
                   Message : ${req.body.message}
            `
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }
}


module.exports = {contact}
