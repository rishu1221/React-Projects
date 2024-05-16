const jwt =require("jsonwebtoken")
const {user} = require("../db/connect")
const login = async (req,res)=>{
    try {
        const {username,password} = req.body;
    //If username not present or password not present
    if(!username || !password){
        res.status(401).json("Please provide Username and Password");
    }

    //Get the id from the DB
    const currentUser = await user.findOne({userName:username});

    if(!currentUser){
        res.status(401).json("User not found");
    }
    else{
        //Compare passwords
        console.log(currentUser)
        if(currentUser.password == password){
            const id = currentUser.id
            const admin = currentUser.admin
            const token = jwt.sign({id,username,admin},process.env.JWT_SECRET,{expiresIn:'30d'});
            console.log(token);
            res.status(200).json(token);
        }
        else{
            res.status(400).json("Incorrect Password");
        }

        
    }
    } catch (error) {
        console.log(error);   
    }


    //Check in Authorisation Header if token is present

}

module.exports = login