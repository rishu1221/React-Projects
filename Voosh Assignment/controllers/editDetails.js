const {userDetails} = require("../db/connect")

const editDetails = async (req,res)=>{

    try {
        //Gather the details such as name,description and public
        const {name,description,public} = req.body;

        if(!name || !description || typeof(public)!=Boolean){
           return res.status(422).json({"msg": "Please provide all information"});
        }
        const id = req.user.id;
        const userDetailsObj = {
            name : name,
            description : description,
            public : public,
        }

        //Save it in DB
        await userDetails.findOneAndUpdate({id:id},userDetailsObj)
        return res.status(200).json({"msg":"User Details Saved"});
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }

}

module.exports = editDetails