const {userDetails} = require("../db/connect")

const editDetails = async (req,res)=>{
 
    //set Details of the user
    try {
        //Gather the details such as name,description and public
        const {name,description,public} = req.body;
        console.log(req.user);
        const id = req.user.id;
        const userDetailsObj = {
            name : name,
            description : description,
            public : public,
        }

        //Save it in DB
        await userDetails.findOneAndUpdate({id:id},userDetailsObj)
        console.log("After update")
        res.status(200).json({"msg":"User Details Saved"});


    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }

}

module.exports = editDetails