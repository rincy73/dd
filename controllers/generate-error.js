const generateError = (req, res, next) => {
    console.log('generate error');
    const error = new Error('error generated');
    error.statusCode = 401;
    next(error);
};
export default generateError;
