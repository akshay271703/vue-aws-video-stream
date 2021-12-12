const router = require('express').Router();

router.use('/file-upload', require('./upload.route'));

module.exports = router;
