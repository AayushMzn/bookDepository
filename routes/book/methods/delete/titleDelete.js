const { mysqlHelper } = require("../../../../common");

(() => {
    module.exports = async (req, res, next) => {
        const bookTitle = req.body.bookTitle;

        let request = `delete from bookinfo where bookTitle = '${bookTitle}'`;

        const response = await mysqlHelper.query(request);
        if (response[0].affectedRows > 0) {
            res.status(200).send("book deleted");
        }
        else {
            res.status(200).send("book not found");
        }
    }
})()