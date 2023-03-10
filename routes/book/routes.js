const auth = require("../../middleware/athentication");
(() => {
    const express = require("express");
    const router = express.Router();
    
    const bookController = require("./methods/index")
    router.post('/book-view',auth,bookController.bookView);
    module.exports = router;
})()