import shoes from '../model/product.model.js';

let getProduct = async (req, res) => {
    try {
        try {
           let item= await shoes.find();
            res.send(JSON.stringify(item));
        } catch (error) {
            console.log(error);
            res.status(404).send({
                message: 'fail',
            });
        }
    } catch (error) {}
};

export default {
    getProduct,
};
