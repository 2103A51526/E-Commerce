const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      userName, 
      email,
      password: hashPassword,
      role: "user",
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration is successful",
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Some error occurred',
    });
  }
};

const login = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Some error occurred',
    });
  }
};
module.exports = { register };
