const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model('Client', ClientSchema);
