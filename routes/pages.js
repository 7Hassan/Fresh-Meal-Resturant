const express = require('express');
const path = '../controllers/pageCtrl.js';

const {
  homeFunc, aboutfunc, blogFunc, contactFunc, gallaryFunc, servicesFunc, shopFunc,
} = require(path);

const router = express.Router();

router.get('/', homeFunc);
router.get('/index', homeFunc);
router.get('/about', aboutfunc);
router.get('/blog', blogFunc);
router.get('/contact', contactFunc);
router.get('/gallery', gallaryFunc);
router.get('/services', servicesFunc);
router.get('/shop', shopFunc);

module.exports = router;