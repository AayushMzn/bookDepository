const { mysqlHelper } = require("./../../../common");

(() => {
    module.exports = async (req, res, next) => {
        const user = req.user;
        const email = req.email;
        const pass = req.pass;
        const name = req.name;
        const phone = req.phone;

        let request = `insert into login values('${name}','${email}','${phone}','${user}','${pass}')`;
        const response = mysqlHelper.query(request);
        console.log(req.body);
    }
})()