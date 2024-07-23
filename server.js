const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8080;

// Middleware
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies

// Login - Set cookies
app.post('/login', (req, res) => {
  res.cookie('session', 'user_session_data', {
    httpOnly: true,
    maxAge: 3600000,
  });
  res.sendStatus(200);
});

// Logout - Clear cookies
app.post('/logout', (req, res) => {
  res.clearCookie('session');
  res.sendStatus(200);
});

// Check cookie status
app.get('/check-cookie', (req, res) => {
  if (req.cookies.session) {
    res.send('Session cookie is set.');
  } else {
    res.send('Session cookie is not set.');
  }
});

// Handle 404
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
