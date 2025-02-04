const { Tarhelycsomag } = require('../models/product.model')

exports.registerProduct = async (name, price, description) => {
    const product = await Tarhelycsomag.create({
        name,
        price,
        description,
    })
    return product;
}

exports.modifyProduct = async (id, name, price, description) => {
    return await Tarhelycsomag.update({
        name: name,
        price: price,
        description: description,
    },
    {
        where: {
            id: id,
        },
    });
}

exports.deleteProduct = async (id) => {
    return await Tarhelycsomag.destroy({
        where: {
            id: id,
        },
        truncate: true,
    });
}