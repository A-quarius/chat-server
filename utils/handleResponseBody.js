const handleResponseSuccess = (data, message) => {
    return JSON.stringify({
        code: '0000',
        message: message || '请求成功',
        data
    })
}

 const handleResponseFail = (code,data, message) => {
    return JSON.stringify({
        code: code,
        message: message || '请求成功',
        data
    })
}
module.exports = {
    handleResponseSuccess,
    handleResponseFail
}