const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes/route");
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Write the test API - to makesure whether the APIs working properly or not
app.get("/test", (request, response) => {
    response.json({
        message:'node is running'
        })
});


app.use(router);

// Listen(portnumber,function) -> it helps to starting the node server with respective configured port.
app.listen(5000, function serverStart() {
  console.log("node server started in Port 5000");
});
