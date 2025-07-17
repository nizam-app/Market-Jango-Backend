const successResponse = (res, message, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    status: 'success',
    message,
    data,
  });
}
const errorResponse = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    status: 'failed',
    message,
  });
} 

module.exports = {
    successResponse,
    errorResponse,
};

