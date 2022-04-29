const express = require("express");
const {get_all_qoute, post_qoute, delete_qoute, random_qoute} = require("../../views/qoute");
const auth = require("../../middlewares/auth");
const router = express.Router()


//@route GET api/qoute
//@desc GET all qoutes
//@access Public
router.get("/", get_all_qoute)

//@route POST api/qoute
//@desc POST a qoutes
//@access Public
router.post("/", post_qoute)

//@route POST api/qoute/random
//@desc POST all qoutes
//@access Public
router.get("/random", random_qoute)


//@route delete api/qoute
//@desc delete all qoutes
//@access Public
router.delete("/:id", delete_qoute)

module.exports = router