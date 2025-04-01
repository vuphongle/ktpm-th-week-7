const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// API health check
app.get('/health', (req, res) => {
  res.status(200).send('App is running');
});

// Lắng nghe trên cổng 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
