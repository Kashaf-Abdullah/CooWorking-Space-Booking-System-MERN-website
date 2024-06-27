// const mongoose = require('mongoose');

// const spaceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
//   capacity: { type: Number, required: true },
//   amenities: { type: [String], default: [] },
//   description: { type: String },
//   date: { type: Date, required: true },
//   times: { type: [String], required: true },

// });

// module.exports = mongoose.model('Space', spaceSchema);



const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  amenities: { type: [String], default: [] },
  description: { type: String },
  date: { type: Date, required: true },
  times: { type: [String], required: true }, // Array of time slots
});

module.exports = mongoose.model('Space', spaceSchema);
