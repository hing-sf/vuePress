const mongoose = require('mongoose');
const { Schema } = mongoose;
const ContentSchema = require('./ContentSchema');

const surveySchema = new Schema({
  instanceId: String,
  storyDefault: ContentSchema,
  storyjumbo: ContentSchema,
  storysecondary: ContentSchema,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);