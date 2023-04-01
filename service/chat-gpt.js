const {Configuration, OpenAIApi} = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
/**
 * 调用gpt接口
 * @param res
 * @param req
 * @returns {Promise<*>}
 */
 const chatGpt = async(req, res) => {
        try {
            console.log(req.body)
            const openai = new OpenAIApi(configuration);
            // const completion = await openai.createChatCompletion({
            //     model: "gpt-3.5-turbo",
            //     messages: [{role: "user", content: "你是谁"}],
            // });
            // const {role, content} = completion.data.choices[0].message
            return "content"
        }catch (e) {
            console.log('error', e)
        }
}

module.exports ={
    chatGpt
}