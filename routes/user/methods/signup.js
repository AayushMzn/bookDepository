const { insert } = require("../sql");
const { validationHelper } = require("./../../../common");
(() => {
    module.exports = async (req, res, next) => {
        validationHelper.valid(req.body);

    }
})(module.exports)