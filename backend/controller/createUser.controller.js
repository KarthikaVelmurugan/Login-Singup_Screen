const e = require("express");
const query = require("../database/db");

const createUser = async (req, res) => {
  if (
    req.body.username.length > 0 &&
    req.body.email.length > 0 &&
    req.body.password.length >= 8
  ) {
    const checkExistingUser = await query.query(
      `SELECT COUNT(*) AS COUNTOFUSERS FROM users WHERE username in ('${req.body.username}') OR email in ('${req.body.email}')`
    );

    if (checkExistingUser[0][0].COUNTOFUSERS < 1) {
      const result = await query.query(
        `INSERT INTO users(username,email,password) VALUE ('${req.body.username}','${req.body.email}','${req.body.password}')`
      );
      if (result[0]["affectedRows"] > 0)
        return { status: 200, message: "Successfully Inserted!" };
      else
        return {
          status: 400,
          message: "Error occured during create the new user!",
        };
    } else {
      return { status: 400, message: "Username/Email already exist!" };
    }
  } else if (req.body.password.length < 8)
    return {
      status: 400,
      message: "Password lenght should not be less than 8",
    };
  else
    return { status: 400, message: "Username/Email empty value not accepted!" };
};

module.exports = {
  createUser: createUser,
};
