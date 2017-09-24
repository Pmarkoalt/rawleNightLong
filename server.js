const express = require('express')
const app = express()

var PORT = process.env.PORT || 8080;

app.use(express.static("./public"));

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, function () {
  console.log('Example app listening on port 8080!')
})
