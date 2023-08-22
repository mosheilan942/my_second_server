
import * as all_express from "express";
import morgan from 'morgan';
const router = all_express.Router();
import * as controller from '../controller/controller_index.js';
import {checkAdmin} from '../my-middleware/my-middleware.js'
const app = all_express.default();
app.use(all_express.json());


// router for products
router.get('/all-products',async (req, res) => {
    const products = await controller.getAllprodcts('./newproducts.json')
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



//router for users
router.get('/all-users', checkAdmin, async (req, res) => {
    const users = await controller.getAllusers(res, './users.json')
    res.send(users);
});

router.post('/add-user',async (req, res) => {
    const users = await controller.addUser(res, req.body)
    res.send("you have good to go!", users);
});

router.get('/login-user/:id', checkAdmin, async (req, res) => {
    const user = await controller.getUserById(res, req.params.id, req.body.id)
    res.send(user);
});

router.put('/edit-user/:id',async (req, res) => {
    const users = await controller.updateUser(req.params.id, req.body)
    res.send(users);
});

router.delete('/delete-user/:id',async (req, res) => {
    const users = await controller.deleteUserById(req.params.id)
    res.send(users);
});

export { router };

