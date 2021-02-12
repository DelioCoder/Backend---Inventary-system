const productCtrl = {};

const Product = require('../Models/Product');

productCtrl.getProducts = async (req, res) => {

    try{

        const products = await Product.find();

        if(products){
            res.json(products);
        }else{
            res.json({ message: 'There are no products yet :c' });
        }

    }catch(e){
        res.json(e);
    }

}

productCtrl.getProduct = async (req, res) => {

    try{

        const product = await Product.findById(req.params.id);

        if(product){
            res.json(product);
        }else{
            res.json({ message: 'Here dont have this product :c' })
        }

    }catch(e){
        res.json(e);
    }

}

productCtrl.createProduct = async (req, res) => {

    try {
        
        const { name, type, brand, description, price, stock } = req.body;

        const newProduct = new Product({
            name,
            type,
            brand,
            description,
            price,
            stock
        });

        await newProduct.save();

        if(newProduct){
            res.json({message: 'product has been created :D'})
            res.json(products);
        }

    } catch (error) {
        res.json(error);
    }

}

productCtrl.updateProduct = async (req, res) =>{

    try {
        
        const { name, type, brand, description, price, stock } = req.body;

        await Product.findByIdAndUpdate({_id: req.params.id},{
            name,
            type,
            brand,
            description,
            price,
            stock
        });
        res.json({message: 'Product has been updated'});

    } catch (error) {
        res.json(error);
    }

}

productCtrl.deleteProduct = async(req, res) => {

    try {
        
        await Product.findByIdAndDelete(req.params.id);

        res.json({message: 'Product has been deleted'});
        
    } catch (error) {
        
    }

}

module.exports = productCtrl;