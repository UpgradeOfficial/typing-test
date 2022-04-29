const express = require("express");
const {register_new_user, login_user, get_user} = require("../../views/users");
const auth = require("../../middlewares/auth");
const router = express.Router()


//@route GET api/user
//@desc register new users
//@access Public
router.post("/register", register_new_user)

//@route POST api/user
//@desc POST all users
//@access Public
router.post("/login", login_user)

//@route POST api/user
//@desc POST all users
//@access Public
router.get("/",auth, get_user)

//@route delete api/user
//@desc delete all users
//@access Public
//router.delete("/:id", delete_user)

module.exports = router