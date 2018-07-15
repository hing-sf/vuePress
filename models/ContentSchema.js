const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContentSchema = new Schema({
  images: [ {
    large: String,
    medium: String
  }],
  ctas: [{
    url: String,
  }],
  transdata: {
    eye: {
      en: String
    },
    hed: {
      en: String
    },
    sub: {
      en: String
    },
    cta: {
      en: String
    }
  }

});

module.exports = ContentSchema; 