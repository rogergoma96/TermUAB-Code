const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
   name: { type: String, required: true},
   description: { type: String, required: true},
   languages: {type: Array, required: true}
});

module.exports = mongoose.model('Project', ProjectSchema);
