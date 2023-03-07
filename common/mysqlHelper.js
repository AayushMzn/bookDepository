'use-strict';
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
          port: process.env.MYSQL_DB_MIGRATION_PORT,
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
    
  };

  mysqlHelper.queryFormat = (query, values) => {
    try {
      return (dbClient.config.queryFormat = function (query, values) {
        if (!values) return query;
        return query.replace(
          /\:(\w+)/g,
          function (txt, key) {
            if (values.hasOwnProperty(key)) {
              return this.escape(values[key]);
            }
            return txt;
          }.bind(this)
        );
      });
    } catch (error) {
      throw error;
    }
  };
})(module.exports);
