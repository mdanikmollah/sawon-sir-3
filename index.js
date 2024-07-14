const express = require('express')
const mongoose = require('mongoose')
const User = require("./models/userModel.js")
const app = express()
app.use(express.json())

//database
mongoose.connect("mongodb+srv://mdanik0178:Nzwl5XUwnPNIVJiN@cluster0.5lm2vkh.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database connected");
})

app.post("/createuser",(req,res)=>{
    const { firstName,lastName,email,userName,designation } = req.body

    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        userName: firstName + lastName,
        email: email,
        designation: designation
    })
    newUser.save()
    res.send(newUser)
})
app.put("/update/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const updateUser = await User.findByIdAndUpdate(id,req.body, { new: true })
        res.send(updateUser)
    } catch (error) {
        console.log(error);
    }
    
})

app.delete("/delete/:id", async(req,res)=>{ 
    try {
        const { id } = req.params
        const deleteUser = await User.findByIdAndDelete(id,req.body, { new: true })
        res.send(deleteUser)
    } catch (error) {
        console.log(error);
    }
    
})

app.get("/user", async(req,res)=>{
    const users = await User.find()
    res.send(users)
})

app.listen(8000)