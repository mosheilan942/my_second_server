
import * as all_express from "express";
import morgan from 'morgan';
const router = all_express.Router();
import * as controller from '../controller/controller_index.js';
const app = all_express.default();
app.use(all_express.json());


router.get('/all-products',async (req, res) => {
    const products = await controller.getProducts()
    res.send(products);
});

router.post('/add-products',async (req, res) => {
    const products = await controller.addProducts(req.body)
    res.send(products);
});

router.get('/all-products/:id',async (req, res) => {
    const product = await controller.getProductById(req.params.id)
    res.send(product);
});

router.put('/update-product/:id',async (req, res) => {
    const products = await controller.updateProduct(req.params.id, req.body)
    res.send(products);
});

router.delete('/delete-product/:id',async (req, res) => {
    const products = await controller.deleteProductById(req.params.id)
    res.send(products);
});

router.put('/update-product-quantity/:id',async (req, res) => {
    const products = await controller.updateProductQuantity(req.params.id, req.body.quantity)
    res.send(products);
});

export { router };