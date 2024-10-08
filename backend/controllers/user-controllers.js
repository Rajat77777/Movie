import User from "../models/User";
import bcrypt from "bcryptjs";
export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected error occured" });
  }

  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid inputs" });
  }
  const hashedPassword= bcrypt.hashSync(password);


let user;
try {
  user = await User.findByIdAndUpdate(id,{name,email,password:hashedPassword})
} catch (errr) {
  return console.log(errr);
  
}
if(!user){
  return res.status(500).json({ message:"Something went wrong"});
}
res.status(200).json({message:"Updates successfully"})
};

  const hashedPassword= bcrypt.hashSync(password);


  let user;
  try { 
    user = new User({name,email,password:hashedPassword});
    user = await user.save();


  } catch(err){

    return console.log(err);




  }

  if(!user){
    return res.status(500).json{{mesage: "Unexpected error"}};
  }

  return res.status(201).json({user})
 
};

export const updateUser = async(req, res, next)=>{
  const id = req.params.id;
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid inputs" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = await User.findByIdAndUpdate(id,{name,email,password:hashedPassword});
    
  } catch (errr) {
    return console.log(errr);
    
  }
  if(!user){
    return res.status(500).json({message:"Something went wrong"});
  }
  res.status(200).json({message:"Updated successfully"});
};

export const deleteUser = async(req,res,next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndDelete(id);
    
  } catch (err) {
    return console.log(err)
    
  }
  if(!user){

    return res.status(500).json({message:"Something went wrong"});
  }
  return res.status(200).json({message:"Deleted successfully"});
};

export const login = async(req,res,next) => {
  const {email, password} = req.body;

  if(
     !email && email.trim() === "" && !password && password.trim() === ""

  ){
    return res.status(422).json({message: "Invalid Inputs"});
  }
  let existingUser;

  try {
    existingUser = await User.findOne({email});
    
  } catch (err) {
    return console.log(err);
    
  }

  if(!existingUser){
    return res.status(404).json({message:"Unable to find user from id"});
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if(!isPasswordCorrect){
    return res.status(400).json({message:"Password Incorrect"});
  }

  return res.status(200).json({message:"Login Successful"});
};






