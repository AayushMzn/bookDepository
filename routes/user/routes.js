(() => {
    const express = require("express");
    const router = express.Router();
    const userController = require("./methods/index")
    
    router.post('/sign-up',userController.userSignup);
    module.exports = router;
})()