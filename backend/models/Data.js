const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  creditScore: { type: Number, required: true },
  creditLines: { type: Number, required: true },
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
