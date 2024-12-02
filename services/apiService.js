const axios = require('axios');

exports.getApiKey = async (name, email_address) => {
    const response = await axios.post('https://assessment.takafulbrunei.com/v1/candidate/', {
        name,
        email_address
    });
    return response.data.apiKey;
};

exports.downloadQuestions = async (apiKey) => {
    const response = await axios.get('https://assessment.takafulbrunei.com/api/v1/download/questions', {
        headers: { 'x-api-key': apiKey }
    });
    return response.data;
};