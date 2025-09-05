const HTTP = require('../constants/http');
const authService = require('../services/auth.service');

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(HTTP.OK).json(user);
    } catch (err) {
        console.log(err.parent);
        res.status(HTTP.BAD_REQUEST).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.json({ token });
    } catch (err) {
        res.status(HTTP.UNAUTHORIZED).json({ message: err.message });
    }
};
