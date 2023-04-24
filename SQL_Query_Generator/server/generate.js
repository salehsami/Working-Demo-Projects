import openaiClient from './api.js'

const generate = async (queryDescription) => {
    const response = await openaiClient.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert following text in form of SQL query \n\n${queryDescription}`,
        temperature: 0,
        max_tokens: 50
    });
    return response.data.choices[0].text;
};

export default generate;
