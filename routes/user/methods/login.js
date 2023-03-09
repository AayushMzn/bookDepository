const { validationHelper } = require("./../../../common");
(() => {
    module.exports = async (req, res, next) => {
        let msg =await validationHelper.checkAccount(req.body);

        res.status(200).send(msg);
    }
})(module.exports)