const express = require('express');
const app = express();

// Track email opens
app.get('/track-open', (req, res) => {
  const email = req.query.email;
  console.log(`Email opened by: ${email}`);
  res.send('<img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" />');
});

// Track link clicks
app.get('/track-click', (req, res) => {
  const email = req.query.email;
  const url = req.query.url;
  console.log(`Link clicked by: ${email}, Redirecting to: ${url}`);
  res.redirect(url);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
