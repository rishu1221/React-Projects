const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology: true})

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

const BlackListTokensScehma = mongoose.Schema({
    token : String,
    timeToExpire : Number
})

const user = mongoose.model('AuthAssignment',userSchema);
const userDetails = mongoose.model('UserDetails',UserDetailsSchema);
const blackListTokens = mongoose.model('BlackListTokens',BlackListTokensScehma);

module.exports = {
    user ,
    userDetails,
    blackListTokens
}