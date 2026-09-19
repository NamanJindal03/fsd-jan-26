import express, { Router } from 'express'
import fs from 'fs/promises'
import { getData, writeData } from './utility.js';
import productsRouter from './product-route.js'
import rateLimit from 'express-rate-limit';

const router = express.Router();

router.use('/products', productsRouter)

// product add
router.post('/product', async (req, res) => {
    const newProduct = req.body;
    const products = await getData();

    newProduct.id = Math.max(...products.map( p => p.id)+1)

    products.push(newProduct);
    await writeData(products);
    res.status(201).json(newProduct)
})



// product update using put

//product update using patch

//product delete 


export default router;