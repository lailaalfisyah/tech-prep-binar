const express = require("express");
const router = express.Router();
const restrict = require("../middlewares/restrict");
const crud1 = require("../controllers/crud1");

router.get('/products', restrict, crud1.getProducts)
router.get('/products/:id', restrict, crud1.getProduct)
router.post('/products', restrict, crud1.postProduct)
router.put('/products/:id', restrict, crud1.putProduct)
router.delete('products/:id', restrict, crud1.deleteProduct)

module.exports = router;