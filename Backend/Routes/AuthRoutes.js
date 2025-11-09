const router = require("express").Router();
const {signup,login,logout} = require("../Controllers/AuthController")
const {userVerification} = require("../Middlewares/AuthMiddleware")
const {signupValidation,loginValidation} = require("../Middlewares/AuthValidators")

router.post('/',userVerification);
router.post("/signup",signupValidation,signup);
router.post("/login",loginValidation,login);
router.post("/logout",logout);



module.exports=router;