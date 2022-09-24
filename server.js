import express from "express"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const server = express();

server.use(express.static("public"))
server.use(express.json())

server.post("/send", (req,res)=>{
    console.log("new wishes came")
    console.log(req.body)
// setup transporter
    let transporter = nodemailer.createTransport({
        service: "gmail",
        user : "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type : "login",
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        }
    })
    var mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: req.body.email,
        subject: 'Your Xmas wishlist to Santa',
        text: "All you wished for Chrsitmas are " + req.body.wishes
      };

      let message = {
          message: "Your wishes are sent to Santa",
          email: "Confirmation is sent to "
      }

      if( req.body.email == ""){
        res.send(message)
        return
      } 

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error)
          res.send(error);
        } else {
          console.log('Email sent: ' + info.response)
          message.email = "Confirmation is sent to " + req.body.email
          res.send(message)          
        }
    })

})

server.listen(8080, ()=>{
    console.log("server is listening")
})