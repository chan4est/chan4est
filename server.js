var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname));

app.use(express.static("./", {
    extensions: ['html', 'htm', 'pdf'],
}));

// routes
app.get("/", function(req, res) {
  res.render("index");
})

app.get('*', function(req, res){
  res.send(404)
});

app.listen(port, function() {
  console.log("Website Up!")
})