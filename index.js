

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const spaceRoutes = require('./routes/spacesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

const MONGODB_URI =process.env.MONGO_URL

// app.use(cors()); // Allow all origins by default. Configure as needed.


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// server.js or app.js
app.use('/uploads', express.static('uploads'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error handling middleware:', err);
  res.status(500).json({ message: 'Internal server error' });
});

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/space',spaceRoutes)
app.get('/', (req, res) => {
  res.send('Hello World');
});