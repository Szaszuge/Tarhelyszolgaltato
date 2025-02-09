const { Elofizetes } = require('../models/subscription.model');


exports.registerSubscription = async (userID, csomagID, date, domain) => {
    const subscription = await Elofizetes.create({
        userID,
        csomagID,
        date,
        domain,
    })
    return subscription;
}

exports.getAllsubscriptions = async () => {
    return await Elofizetes.findAll()
}