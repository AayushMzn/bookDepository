const {mysqlHelper} = require("../../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        const ISBN = req.body.ISBN;
        const genre = req.body.genre;
        
        let request = `update bookinfo set genre = '${genre}' where ISBN ='${ISBN}'`;
        
        const response = await mysqlHelper.query(request);

        if (response[0].affectedRows > 0) {
            res.status(200).send("genre Updated");
        }
        else {
            res.status(200).send("book not found");
        }
    }
})()