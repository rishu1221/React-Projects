const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://reeshavsharma007:221breeshav@nodeexpressprojects.jqmbdwt.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects",{useNewUrlParser: true
, useUnifiedTopology: true
})

const userSchema = mongoose.Schema({
    userName : String,
    id : String,
    password : String,
    admin : Boolean
})

const UserDetailsSchema = mongoose.Schema({
    id : String,
    name : String,
    description : String,
    public : Boolean,
})

const user = mongoose.model('AuthAssignment',userSchema);
const userDetails = mongoose.model('UserDetails',UserDetailsSchema);

module.exports = {
    user ,
    userDetails
}