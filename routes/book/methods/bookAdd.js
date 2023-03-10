const {mysqlHelper} = require("./../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        const ISBN = req.body.ISBN;

        let request = `insert into tasks (task_name,task_description,due_date,status) values
            ("${taskName}","${taskDescription}","${dueDate}","${status}")`;
        
        const response = await mysqlHelper.query(request);

        res.status(200).send("Book Added");
    }
})()