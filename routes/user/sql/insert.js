const { mysqlHelper, hasher } = require("./../../../common");


((insert) => {
    insert.put = async (req, res, next) => {
        const user = req.user;
        const email = req.email;
        const pass = req.pass;
        
        const salt = await hasher.createSalt();
        let hashed = await hasher.computeHash(pass.toString(), salt);
        // console.log(hashed)

        let request = `insert into login values('${email}','${user}','${hashed}')`;
        const response = mysqlHelper.query(request);
        
    }
})(module.exports)