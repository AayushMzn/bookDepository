const { mysqlHelper } = require("./../../../common");   
(() => {
    module.exports = async (req, res, next) => {
        let sqlQuery = 'select bookTitle,author,publisher,published_date,genre from bookInfo'
        const response = await mysqlHelper.query(sqlQuery);
        res.status(200).send(response[0]);
    }
})(module.exports)