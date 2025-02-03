const { Elofizetes } = require('../models/subscription.model')


exports.registerSubscription = async (userID, csomagID, date) => {
    const subscription = await Elofizetes.create({
        userID,
        csomagID,
        date
    })
    return subscription;
}

exports.getAllUsers = async () => {
    return await Elofizetes.findAll()
}