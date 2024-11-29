const { getApiKey, downloadQuestions } = require('../services/apiService');

exports.getApiKeyController = async (req, res) => {
    try {
        const { name, email } = req.body;
        const apiKey = await getApiKey(name, email);
        res.status(200).json({ apiKey });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.downloadQuestionsController = async (req, res) => {
    try {
        const { apiKey } = req.headers;
        const questions = await downloadQuestions(apiKey);
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};