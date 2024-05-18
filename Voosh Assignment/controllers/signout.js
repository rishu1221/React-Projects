const {blackListTokens} = require('../db/connect')


const signout = async (req,res)=>{
    try {
        const authHeader = req.headers.authorization;
        
        const token = authHeader.split(" ")[1];
        console.log(token);

        await blackListTokens.create({token : token});
        console.log("Token added in Black List Tokens");
        res.status(200).json({"msg":"User Successfully Logged out"});

    } catch (error) {
        console.log(error);
        res.status(401).json({"msg":"Something went wrong while Signing out"});
    }
}

module.exports = signout