const subscriptionService = require('../services/subscription.service');

exports.add = async (req, res, next) => {
    try {
        const {userID, csomagID, date} = req.body
        if (!userID || !csomagID || !date) {
            return res.status(400).json({ message: 'Hiányzó adatok!'});
        }
        const subscription = await subscriptionService.registerSubscription(userID, csomagID, date);
        res.status(201).json(subscription);
    }
    catch (error){
        next(error);
    }
}