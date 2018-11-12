const mongoose = require('mongoose');
const { Schema } = mongoose;
// const ContentSchema = require('./ContentSchema');

const promoSchema = new Schema({
  type: String,
  title: String,
  instanceId: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('promos', promoSchema);