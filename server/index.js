const express = require('express');
const cors = require('cors'); // Enable cross-origin requests

const app = express();
const PORT = 3001; // Backend server runs on port 3001

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
  res.send('Server is running! 🚀');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Data received:', data);
  res.json({ message: 'Data received successfully!', data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
