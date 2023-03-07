// const signup = require("../routes/user/methods/signup");
const insert = require("../routes/user/sql/insert");

((validationHelper) => {
    validationHelper.valid = function (loginIn) {
        let msg = "signup success";;
        let x = true;
        const user = loginIn.user;
        const email = loginIn.email;
        const pass = loginIn.pass;
        const name = loginIn.name;
        const phone = loginIn.phone;

        if (pass == null || user == null || email == null || phone == null || name == null) {
            x = false;
        }

        if (x) {
            insert(loginIn);
        }else{
            console.log("failed");
        }
    }
})(module.exports)