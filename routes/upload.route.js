const router = require('express').Router();
const uploadController = require('../controllers/upload.controller');

router.post('/', uploadController.uploadFile);

module.exports = router;
