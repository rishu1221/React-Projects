const {userDetails} = require("../db/connect")

const getDetails = async (req,res)=>{
    try {
        const id = req.user.id;
        const exisitingInfo = await userDetails.findOne({id:id});
        console.log(exisitingInfo);
        res.status(200).json({"data":exisitingInfo});

    } catch (error) {
        console.log(error);
        res.status(401).json("Sometyhing went wrong");
    }
}

module.exports = getDetails;