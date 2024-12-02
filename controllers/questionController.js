// controllers/questionController.js
const axios = require('axios');
const pascalModel = require('../models/pascalModel');

async function getQuestionData(req, res) {
    try {
        // Step 1: Fetch question ID and numRowList from the GET API
        const response = await axios.get('https://assessment.takafulbrunei.com/v1/question/1', {
            headers: { 'x-api-key': "915765d3-4430-4c60-9f77-6d66bac57c09" }
        });
        const { id, numRowList } = response.data;
        console.log(numRowList)

        // Step 2: Generate Pascal's Triangle using the model
        const pascalResult = pascalModel.generatePascalsTriangle(numRowList);
        console.log(id)
        console.log(pascalResult)

        var data = {
            "id":id,
            "answer":pascalResult
        }

        console.log(data)

        // Step 3: Post the result back to the POST API with the ID and Pascal's Triangle result
        await axios.post('https://assessment.takafulbrunei.com/v1/question/1', data, {
            headers: { 
                'x-api-key': '915765d3-4430-4c60-9f77-6d66bac57c09', // API key for authorization
            }
        },{
            "id": id,
            "answer": pascalResult
        });
        res.status(200).send('Pascal\'s Triangle data has been successfully posted.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to fetch or post data.');
    }
}

module.exports = {
    getQuestionData
};