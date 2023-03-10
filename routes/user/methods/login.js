const { validationHelper } = require("./../../../common");
(() => {
    module.exports = async (req, res, next) => {
        let msg =await validationHelper.checkAccount(req.body,res);

        
    }
})(module.exports)