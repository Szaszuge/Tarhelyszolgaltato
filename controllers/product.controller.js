const productService = require('../services/product.service')

exports.add = async (req, res, next) => {
    try{
        const { name, price, description } = req.body;
        if (!name || !price || !description) {
            return res.status(400).json({message: "Hiányos adatok!"})
        }
        const product = await productService.registerProduct(name, price, description);
        res.status(201).json(product);
    }
    catch(error)
    {
        next(error);
    }
}

exports.modify = async (req, res, next) => {
    try{
        const { id, name, price, description } = req.body;
        if (!id || !name || !price || !description) {
            return res.status(400).json({message: "Hiányos adatok!"})
        }
        const product = await productService.modifyProduct(id, name, price, description);
        res.status(200).json(product);
    }
    catch(error)
    {
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({message: "Hiányzó adat!"})
        }
        const product = await productService.deleteProduct(id);
        res.status(201).json(product);
    }
    catch(error)
    {
        next(error);
    }
}