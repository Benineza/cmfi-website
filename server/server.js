const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('New message from:', name, email);
  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});