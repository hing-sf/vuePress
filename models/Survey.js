const mongoose = require('mongoose');
const { Schema } = mongoose;
const ContentSchema = require('./ContentSchema');
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  slug: String,
  postTitle: String,
  postDescription: String,
  featuredImage: String,
  content: [ContentSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);