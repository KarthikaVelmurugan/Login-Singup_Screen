const searchUser = require("../controller/searchUser.controller");

const searchUserService = async (req, res) => {
  const result = await searchUser.searchUser(req, res);
  res.send(result);
};

module.exports = {
  searchUserService: searchUserService,
};
