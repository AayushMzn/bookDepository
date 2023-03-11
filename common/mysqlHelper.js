const { query } = require('express');
const mysql = require('mysql2/promise');
((mysqlHelper) => {
  let dbClient = null;
  mysqlHelper.init = async () => {
    try {
      if (!dbClient) {
        dbClient = await mysql.createPool({
          user: process.env.MYSQL_DB_USER,
          password: process.env.MYSQL_DB_PASSWORD,
          host: process.env.MYSQL_DB_HOST,
          database: process.env.MYSQL_DB_NAME,
          waitForConnections: true,
          dateStrings: true,
        });
      }
      return dbClient;
    } catch (error) {
      throw error;
    }
  };

  mysqlHelper.query = async (query, fields, metaData) => {
    try {
      let res = dbClient.query(query, fields);
      return res;
    } catch (error) {
      throw error;
    }
S  };
})(module.exports);
