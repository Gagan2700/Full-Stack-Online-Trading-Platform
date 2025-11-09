const User = require("../Models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token  
  if (!token) {
    return res.json({ success: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ success: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ success: true, user: user.username })
      else return res.json({ success: false })
    }
  })
}