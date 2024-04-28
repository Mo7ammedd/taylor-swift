const mongoose = require('mongoose');

const qouteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
    },
    song: {
      type: String,
    },
    album: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Qoute = mongoose.model('Qoute', qouteSchema);
module.exports = Qoute;
