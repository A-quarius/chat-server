var express = require('express');
const {handleResponseSuccess} = require("../utils/handleResponseBody");
const chatService = require("../service/chat-gpt");
var router = express.Router();

/* GET home page. */
router.post('/chat', async function(req, res, next) {
    const content = await chatService.chatGpt(req,res)
    res.status(200)
    res.send(handleResponseSuccess(content))
});

/**
 * 支持上下文
 */
router.post('/chat-context',async (req,res) => {
    const content = await chatService.chatWithContext(req,res)
    res.status(200)
    res.send(handleResponseSuccess(content))
})

module.exports = router;
