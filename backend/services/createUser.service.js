const createUser = require("../controller/createUser.controller");

const createUserService = async (req, res) => {
  const result = await createUser.createUser(req);
  res.send(result);
};

module.exports = {
  createUserService: createUserService,
};
