const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

//TODO: Ezt mind csak admin tudja végrehajtani

router.post("/add", authMiddleware, productController.add); 

router.patch('/update', authMiddleware, productController.modify);

router.post('/delete', authMiddleware, productController.delete);

module.exports = router;