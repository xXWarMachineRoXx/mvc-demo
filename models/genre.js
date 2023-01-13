const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const GenreSchema = new Schema({
    title: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
  });
// Virtual for genreschema's URL
  GenreSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/genreschema/${this._id}`;
  });
  module.exports = mongoose.model("GenreSchema", GenreSchema);