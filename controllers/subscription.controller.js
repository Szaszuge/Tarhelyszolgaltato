const subscriptionService = require('../services/subscription.service');

exports.add = async (req, res, next) => {
    try {
        const {userID, csomagID, date, domain} = req.body
        if (!userID || !csomagID || !date || !domain) {
            return res.status(400).json({ message: 'Hiányzó adatok!'});
        }
        const subscription = await subscriptionService.registerSubscription(userID, csomagID, date, domain);
        res.status(201).json(subscription);
    }
    catch (error){
        next(error);
    }
}