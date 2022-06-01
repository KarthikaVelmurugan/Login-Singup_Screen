const db = require("../database/db");

const searchUser = async (req, res) => {
  const result = await db.query(
    `SELECT COUNT(*) AS USEREXIST FROM users WHERE username in ('${req.body.username}') AND password in ('${req.body.password}')`
  );
  console.log(result[0][0].USEREXIST, "userexist");
  if (result[0][0].USEREXIST == 1) {
    return { status: 200, message: "Logged in Successfully" };
  } else {
    return { status: 400, message: "Invalid Credentials!" };
  }
};

module.exports = {
  searchUser: searchUser,
};
