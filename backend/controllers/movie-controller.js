import jwt from "jsonwebtoken";

export const addMovie = async(req,res,next)=>{
    const extractedToken = req.headers.authorization.split(" ")[1];
    if(!extractedToken && extractedToken.trim()===""){
        return res.status(404).json({message:"Token not Found"});
    }
  let adminId;  


  jwt.verify(extractedToken,process.env.SECRET_KEY,(err,decrypted)=>{
    if(err){
      return res.status(400).json({message:`${err.message}`})
    }else{
      adminId = decrypted.id;
      return;
    }
  });

  const {title,description,releaseDate,posterUrl,featured} = req.body;


  //create a new movie

};