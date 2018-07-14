const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContentSchema = new Schema({
  template: String, 
  image: String, 
  head: String, 
  subCopy: String
});

module.exports = ContentSchema;