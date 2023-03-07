const { mysqlHelper } = require("./../../../common");

((insert) => {
    insert.put = async (req, res, next) => {
        const user = req.user;
        const email = req.email;
        const pass = req.pass;

        let request = `insert into login values('${email}','${user}','${pass}')`;
        const response = mysqlHelper.query(request);
        
    }
})(module.exports)