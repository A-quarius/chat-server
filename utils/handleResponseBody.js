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
        message: message || '系统异常',
        data
    })
}
module.exports = {
    handleResponseSuccess,
    handleResponseFail
}