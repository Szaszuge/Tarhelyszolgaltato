const userMod = require('../models/user.model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/token');


exports.registerUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userMod.create({
        name,
        email,
        password: hashedPassword,
        role: false,
    });
    return user;
}

exports.loginUser = async (email, password) => {
    const user = await userMod.findOne({where: { email }});
    if (!user) throw new Error('Nem regisztrált felhasználó!');
    if (!await bcrypt.compare(password, user.password)) throw new Error('Hibás jelszó!');

    const token = generateToken({ id: user.id, name: user.name, email: user.email});

    return { token }; 
}

exports.getAllUsers = async () => {
    return await userMod.findAll({
        attributes: {exclude: ['password']}
    });
}

exports.IsEmailUsed = async (email) => {
    return await userMod.findAll({
        where: {
            email: email,
        }
    })
}