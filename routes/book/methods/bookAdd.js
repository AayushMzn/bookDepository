const {mysqlHelper} = require("./../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        const ISBN = req.body.ISBN;
        const bookTitle = req.body.bookTitle;
        const author = req.body.author;
        const publisher = req.body.publisher;
        const published_date = req.body.published_date;
        const genre = req.body.genre;
        
        let request = `insert into bookinfo values ("${ISBN}","${bookTitle}","${author}","${publisher}","${published_date}","${genre}")`;
        try {
            const response = await mysqlHelper.query(request);
            res.status(200).send("Book Added");
        } catch (error) {
            res.status(200).send("ISBN already exists");
        }
    }
})()