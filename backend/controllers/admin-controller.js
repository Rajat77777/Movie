export const addAdmin = async(req,res,next) => {

    const { email ,password} = req.body;
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({email});
        
    } catch (err) {
        return console.log(err);
        
    }

    if(existingAdmin){
        return res.status(400).json({message: "Admin already exists"})
    }

};