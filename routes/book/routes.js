const auth = require("../../middleware/athentication");
(() => {
    const express = require("express");
    const router = express.Router();
    
    const bookController = require("./methods/index")
    router.post('/view',bookController.bookView);
    router.post('/add',auth,bookController.bookAdd);
    router.post('/title-update',auth,bookController.titleUpdate);
    router.post('/author-update',auth,bookController.authorUpdate);
    router.post('/genre-update',auth,bookController.genreUpdate);
    router.post('/publisher-update',auth,bookController.publisherUpdate);
    router.post('/pubilshedDate-update',auth,bookController.publishedDateUpdate);
    router.post('/title-delete',auth,bookController.titleDelete);
    router.post('/isbn-delete',auth,bookController.isbnDelete);
    module.exports = router;
})()