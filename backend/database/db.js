const mysql = require("mysql-promise")();
const config = require("../database/config");

const query = async (queryString) => {
    mysql.configure(config.db);
    const [result] = await mysql.query(queryString);
  return [result];
};

module.exports = {
  query: query,
};
