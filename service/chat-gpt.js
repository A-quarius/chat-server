const {Configuration, OpenAIApi} = require("openai")

const {handleResponseFail} = require("../utils/handleResponseBody");
const Message = require('../utils/message')
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
            const message = req.body.message
            const openai = new OpenAIApi(configuration);
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "assistant", content: message}],
            });
            const {role, content} = completion.data.choices[0].message
            return {
                message: content
            }
        }catch (e) {
            handleResponseFail('0001',null, '查询超时')
        }
}
const message = new Message()
const chatWithContext = async (req, res) => {
     try {
         const params = req.body.message
         message.appendMessage(params)
         const openai = new OpenAIApi(configuration);
         const config = {
             model: "gpt-3.5-turbo",
             messages: message.getMessage(),
         }
         console.log('config',config)
         const completion = await openai.createChatCompletion(config);
         const {role, content} = completion.data.choices[0].message
         console.log('content',content )
         return {
             message:content
         }
     }catch (e) {
        handleResponseFail('0001', null, '失败了')
     }
}

module.exports ={
    chatGpt,
    chatWithContext
}