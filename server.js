// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var Article = require("./models/articleModel");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
mongoose.connect("mongodb://heroku_7ghbs3ms:que9lsm2bif7j9idjpiiei0473@ds137207.mlab.com:37207/heroku_7ghbs3ms");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

app.get("/api/saved", function(req, res) {
  Article.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.post("/api/saved", function(req, res) {
  
  var article = new Article(req.body);

  article.save(function(error, doc){
    if(error){
      res.send(error);
    }
    else{
      res.send(doc);
    }
  });
});

app.delete("/api/saved", function(req, res) {
  Article.remove({ url: req.body.url }, function(err) {
    if (err) {
      res.send(err);
    }
    else {
      res.send("Removed article");
    }
  });
});

app.get("*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});
// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.


// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
