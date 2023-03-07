const { mysqlHelper } = require("./../../../common");

((select) => {
    select.checkEmail = async (email) => {
        
        let request = `select email from login where email = '${email}')`;
        const response = mysqlHelper.query(request);
        
    }
})(module.exports)