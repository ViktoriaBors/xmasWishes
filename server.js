import express from "express"

const server = express();

server.use(express.static("public"))
server.use(express.json())

server.post("/send", (req,res)=>{
    console.log("new wishes came")
    console.log(req.body)
    let message = {
        message: "Your wishes are sent to Santa",
        email: "Confirmation is sent to " + req.body.email
    }
    res.send(message)
})

server.listen(8080, ()=>{
    console.log("server is listening")
})