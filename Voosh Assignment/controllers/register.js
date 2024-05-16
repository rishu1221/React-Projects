const {user} = require("../db/connect")
const {userDetails} = require("../db/connect");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const register = async (req,res)=>{
    const {username,password,admin} = req.body;

    if(!username || !password){
        res.status(401).send("Please provide username and password");
    }

    let existingUser = await user.findOne({ userName: username });

    if(existingUser){
        res.status(401).json("UserName already exists");
    }else{
        //Add yuor user to DB
        // But make sure to hash your password (Never store the password directly)

        try{
            const id = Date.now()
            const userCred = {
            userName : username,
            password : password,
            admin : admin,
            id : id
        }
        console.log(userCred);    
        await user.create(userCred)
        await userDetails.create({id:id});

        res.send("User added");
        }
        catch(error){
            res.status(502).json(error);
        }
        
    }
}

module.exports = register