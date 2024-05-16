const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).json("Please provide token");
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
        const {id,username,admin} = decoded
        req.user = {id,username,admin};
        next();
    } catch (error) {
        res.status(401).json("You dont have access to view this")
    }   

    
}

module.exports = authenticationMiddleware