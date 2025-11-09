const bcrypt = require("bcrypt");
const User = require("../Models/userModel")
const {generateToken}=require("../Utils/SecretToken");

module.exports.signup = async (req,res,next)=>{
    try{
        let {username,email,password} =req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res
            .status(409)
            .json({message:"User already exists",success:false})
        }
        const hashpassword = await bcrypt.hash(password,12);
        const user =new User({
            username:username,
            password:hashpassword,
            email:email,
        });
        await user.save();
        const token=generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });
        res
            .status(201)
            .json({message:"User created successfully",success:true});
         next();
    }catch(err){
        res
            .status(500)
            .json({message:"User created successfully",success:false});
    }
}


module.exports.login = async (req,res,next)=>{
    try{
        let {email,password} = req.body;
        if(!email || !password){
            return res.json({message:'All fields are required'});
        }
        let user = await User.findOne({email});
        if(!user){
            return res.json({message:'Incorrect email or account doesnot exists', success: false }); 
        }
        const validPass = await bcrypt.compare(password,user.password);
        if(!validPass){
            return res.json({message:'Incorrect password', success: false  }) 
        }
        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1 * 24 * 60 * 60 * 1000
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next();
    }catch(err){
        console.log(err);
    }
}

module.exports.logout = (req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
        sameSite:"lax",
        secure:false,
        maxAge: 1 * 24 * 60 * 60 * 1000
    })
    res.json({ message: "Logged out" });
}




