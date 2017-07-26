var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Article Name is Required"
  },

  url: {
    type: String,
    trim: true,
    unique: true,
    required: "Article URL is Required"
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
