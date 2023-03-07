// const signup = require("../routes/user/methods/signup");
const insert = require("../routes/user/sql/insert");
const select = require("../routes/user/sql/select");

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

        if (x) {
            await insert.put(loginIn);
        } else {
            console.log("failed");
        }
    }
})(module.exports)