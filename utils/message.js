class Message {
    message = []
    constructor() {
        this.message = []
    }

    appendMessage(msg) {
        console.log('msg', msg)
        this.message.push({role: 'user', content: msg})
    }

    getMessage() {
        return this.message
    }

    clearMessage() {
        this.message = []
    }

}

module.exports = Message