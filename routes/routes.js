
(() => {
    const express = require("express");
    const router = express.Router();
    const userRoute = require("./user/routes");
    const bookRoute = require("./book/routes");
    
    router.use('/user',userRoute);
    router.use('/book',bookRoute);
    module.exports = router;

})()
