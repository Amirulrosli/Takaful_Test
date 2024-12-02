// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Define the route for handling the GET request and triggering the controller
router.get('/v1/question/1', questionController.getQuestionData);

module.exports = router;