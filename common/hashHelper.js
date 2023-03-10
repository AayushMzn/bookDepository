const bcrypt = require('bcryptjs');
(()=>{
    module.exports ={
     computeHash :function (sourcePassword,salt){
        return bcrypt.hash(sourcePassword,salt)
    },
    createSalt : function(){
        return bcrypt.genSalt(8);
    },
    comparePassword : function (inputPwd, hash){
        return bcrypt.compare(inputPwd, hash)
    }
    }
})(module.exports);