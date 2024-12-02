const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const questionRoutes = require('./routes/questionRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoutes);
// Use the routes defined in the questionRoutes
app.use(questionRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});