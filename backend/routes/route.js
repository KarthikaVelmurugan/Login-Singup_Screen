const express = require("express");

const createUserService = require("../services/createUser.service");
const searchUserService = require("../services/searchUser.service");
const router = express.Router();

router.route("/createUser").post(createUserService.createUserService);
router.route("/searchUser").post(searchUserService.searchUserService);
module.exports = router;
