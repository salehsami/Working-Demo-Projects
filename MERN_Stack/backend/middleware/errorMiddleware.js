const errorHandler = (err, req, res, next) => {
    const status_Code = res.statusCode ? res.statusCode : 5000

    res.status(status_Code)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}
module.exports = { errorHandler }