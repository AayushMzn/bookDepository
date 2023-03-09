(() => {
    const express = require("express");
    const router = express.Router();
    
    const bookController = require("./methods/index")
    router.post('/book-view',bookController.bookView);
    module.exports = router;
})()