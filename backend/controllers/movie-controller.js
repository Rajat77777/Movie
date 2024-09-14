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

  const {title,description,releaseDate,posterUrl,featured,actors} = req.body;
  if(!title && title.trim()==="" && !description.trim()=="",!posterUrl && posterUrl.trim()==="" ){
    return res.status(422).json({message:"Invaid Inputs"});
  }

  let movie;
  try {
    movie = mew Movie({title,description,releaseDate: new Date(`${releaseDate}`),featured,actors,admin:adminId});
    movie = await movie.save();

  }

  catch (error) {


    return console.log(err);
  }


  if(!movie){
    return res.status(500).json({message:"Request failed"});
  }

  return res.status(201).json({movie})


  //create a new movie

};