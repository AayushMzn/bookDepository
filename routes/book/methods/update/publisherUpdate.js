const { mysqlHelper } = require("../../../../common");

(() => {
    module.exports = async (req, res, next) => {
        const ISBN = req.body.ISBN;
        const publisher = req.body.publisher;

        let request = `update bookinfo set publisher = '${publisher}' where ISBN ='${ISBN}'`;


        const response = await mysqlHelper.query(request);
        if (response[0].affectedRows > 0) {
            res.status(200).send("publisher Updated");
        }
        else {
            res.status(200).send("book not found");
        }
    }
})()