const insert = require("../routes/user/sql/insert");
const sqlHelper = require("./mysqlHelper");
const hasher=require("./hashHelper");
const jwt = require("jsonwebtoken");

((validationHelper) => {
    validationHelper.valid = async function (loginIn) {
        let msg = "signup success";;
        let x = true;
        const user = loginIn.user;
        const email = loginIn.email;
        const pass = loginIn.pass;
        const emailCheck = new RegExp(/^([a-zA-Z0-9\.\_])+@([a-zA-Z0-9])+.com$/);
        const passCheck = new RegExp(/^[a-zA-Z0-9]{6,10}$/);

        if (pass == null || user == null || email == null) {
            x = false;
        }
        if (emailCheck.test(email) == false) {
            x = false;
        }
        if (passCheck.test(pass) == false) {
            x = false;
        }
        // let request = 'Select email from login where email = "'+email+'"';
        let request = 'Select email from login';
        const response = await sqlHelper.query(request);
        for (let i = 0; i < response[0].length; i++) {

            // console.log(response[0][i].email)
            if (response[0][i].email == email) {
                x = false;
                console.log("email exists");
            }
        }
        let request2 = 'Select username from login';
        const response2 = await sqlHelper.query(request2);
        for (let i = 0; i < response2[0].length; i++) {

            // console.log(response2[0][i].username)
            if (response2[0][i].username == user) {
                x = false;
                console.log("username exists");
            }
        }


        if (x) {
            await insert.put(loginIn);
            return msg;
        } else {
            msg = "signup unsuccessful"
            return msg;
        }
    }
    validationHelper.checkAccount = async function (loginIn,res) {
        let msg;
        const user = loginIn.user;
        const pass = loginIn.pass;
        let token = ""
        
        let request = 'Select * from login';
        const response = await sqlHelper.query(request);

        for (let i = 0; i < response[0].length; i++) {
            let hash = await hasher.comparePassword(pass, response[0][i].password)
            // console.log( hash)
            if (response[0][i].username == user && hash) {
                token = jwt.sign({user},'top-secret-token',{ expiresIn: '1h' });
                
                msg = "login successful";
                break;
            }
            else {
                msg = "login failed";
            }
        }
        return res.status(200).send({msg,token});
    }
})(module.exports)