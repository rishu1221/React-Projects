const passport = require('passport')
const googleRedirect = async (req,res)=>{
        // Successful authentication, Send the token back to client
        res.status(200).json({"token":req.user.token});
}

module.exports = googleRedirect