const mongoose = require('mongoose')

const newUser = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type:String
    },
    userName:{
        type: String
    },
    designation:{
        type: String
    },
})

module.exports = mongoose.model("user", newUser)