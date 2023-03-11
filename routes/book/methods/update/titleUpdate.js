const { mysqlHelper } = require("../../../../common");

(() => {
    module.exports = async (req, res, next) => {
        const ISBN = req.body.ISBN;
        const bookTitle = req.body.bookTitle;

        let request = `update bookinfo set bookTitle = '${bookTitle}' where ISBN ='${ISBN}'`;

        const response = await mysqlHelper.query(request);
        if (response[0].affectedRows > 0) {
            res.status(200).send("title Updated");
        }
        else {
            res.status(200).send("book not found");
        }
    }
})()