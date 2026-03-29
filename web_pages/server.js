const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy-policy.html'));
});

app.get('/support', (req, res) => {
  res.sendFile(path.join(__dirname, 'support.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Policy pages server running on port ${PORT}`);
  console.log(`📍 Privacy Policy: http://localhost:${PORT}/privacy-policy`);
  console.log(`📍 Support: http://localhost:${PORT}/support`);
});
