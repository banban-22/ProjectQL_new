const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
});

module.exports = mongoose.model('Project', ProjectSchema);
