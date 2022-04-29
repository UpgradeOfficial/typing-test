const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/User");
const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtSecret = process.env.jwtSecret

const register_new_user = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ msg: "all feld must be included" });
  }
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "user already exists" });
    } else {
      const newUser = new User({
        name,
        email,
        password,
      });

      // hash the password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          
          newUser.password = hash;
          newUser.save().then((user) => {
              jwt.sign({id: user.id}, jwtSecret, {expiresIn: 3600}, (err, token)=>{
                if (err) throw err; 
                res.json({token, user})
              })
             
            });
        });
      });


    }
  });
};

const login_user = (req, res) => {
    const {  email, password } = req.body;
  
    if ( !email || !password) {
      res.status(400).json({ msg: "all feld must be included" });
    }
    User.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(400).json({ msg: "user doesn't  exists" });
      } else {

        //validate password
        console.log(user.password, password )
        bcrypt.compare(password, user.password)
            .then(isMatch =>{
                if(!isMatch) return res.status(400).json({ msg: "Invalid Credential" });

                jwt.sign({id: user.id}, jwtSecret, {expiresIn: 3600}, (err, token)=>{
                    if (err) throw err; 
                    res.json({token, user})
                  })

            })
      }
    });
  };

  const get_user = (req, res) => {

    User.findById(req.user.id)
        .select("-password")
        .then(user => res.json(user))

  }
module.exports = {
  register_new_user,
  login_user,
  get_user
};
