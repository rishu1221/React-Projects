const {userDetails} = require("../db/connect");

const home = async (req,res)=>{
    try {
        const user = req.user;

        if(!user.admin){
            const userList = await userDetails.find({public:true});
            res.status(200).json(userList);
        }else{
            const userList = await userDetails.find();
            res.status(200).json(userList);
        }

    } catch (error) {
        res.status(400).json("Somthing went wrong");
        console.log(error);
    }
}

module.exports = home;