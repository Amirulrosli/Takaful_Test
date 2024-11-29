const express = require('express');
const { getApiKeyController, downloadQuestionsController } = require('../controllers/apiController');

const router = express.Router();

// Route to obtain API Key
router.post('/get-api-key', getApiKeyController);

// Route to download questions
router.get('/download-questions', downloadQuestionsController);

module.exports = router;