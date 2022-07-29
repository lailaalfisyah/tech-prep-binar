const express = require("express");
const router = express.Router();
const auth = require("./auth");
const crud1 = require("./crud1");

router.use('/api/auth', auth);
router.use('/api/v1', crud1);

module.exports = router;