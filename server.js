const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
require('dotenv').config();
const mysqlHelper = require("./common/mysqlHelper")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.set("port", port);

const routes = require("./routes/routes")
app.use("/api",routes)

app.listen(port, () => {
  mysqlHelper.init();
  console.log(`Example app listening on port ${port}`)
})