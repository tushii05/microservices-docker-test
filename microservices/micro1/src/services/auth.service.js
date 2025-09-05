const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.register = async ({ name, email, password, role }) => {
    if (role === "ADMIN") {
        const existingAdmin = await User.findOne({ where: { role: "ADMIN" } });
        if (existingAdmin) {
            throw new Error("An ADMIN user already exists. Only one ADMIN is allowed.");
        }
    }
    const hashed = await bcrypt.hash(password, 10);
    return User.create({ name, email, password: hashed, role });
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Invalid credentials');

    return jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
};
