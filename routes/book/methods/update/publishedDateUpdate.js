const {mysqlHelper} = require("../../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        const ISBN = req.body.ISBN;
        const published_date = req.body.published_date;
        
        let request = `update bookinfo set published_date = '${published_date}' where ISBN ='${ISBN}'`;
        
        const response = await mysqlHelper.query(request);

        if (response[0].affectedRows > 0) {
            res.status(200).send("published date Updated");
        }
        else {
            res.status(200).send("book not found");
        }
    }
})()