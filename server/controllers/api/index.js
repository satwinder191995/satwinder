const router = require('express').Router();

const contactRoutes = require('./contact-routes.js');

router.use('/contact', contactRoutes);

module.exports = router;
