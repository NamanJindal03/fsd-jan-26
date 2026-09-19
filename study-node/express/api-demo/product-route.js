import express, { Router } from 'express'
import fs from 'fs/promises'
import { getData, writeData } from './utility.js';
const router = express.Router();

// get all products
router.get('/', async (req, res) => {
    const products = await getData();
    res.json(products);
})

// get product with id 
router.get("/:id", async(req, res)=>{
    const products = await getData();
    const product = products.find(
        (p) => p.id ==req.params.id
    );
    if (!product) {
        return res.json({ message: "Product not found" });
    }
    res.json(product);
})


export default router;