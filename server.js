
import app from './app.js';

// Choose the server port
const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});
