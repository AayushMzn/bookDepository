const {mysqlHelper} = require("../../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        const ISBN = req.body.ISBN;
        const author = req.body.author;

        let request = `update bookinfo set author = '${author}' where ISBN ='${ISBN}'`;
        
        const response = await mysqlHelper.query(request);

        if (response[0].affectedRows > 0) {
            res.status(200).send("author Updated");
        }
        else {
            res.status(200).send("book not found");
        }
    }
})()