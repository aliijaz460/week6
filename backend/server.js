const express = require('express');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const app = express();

app.use(helmet()); // Use Helmet for security
app.use(express.json()); // Parse JSON bodies
app.use('/api/user', userRoutes); // Use user routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
