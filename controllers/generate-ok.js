const generateOk = (req, res, next) => {
    res.status(200).json({
        message: 'ok',
    });
};

export default generateOk;
