const express = require('express');
const app = express();
const formData = require('express-form-data');
const os = require('os');

// Application Configurations
const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
};
app.use(express.json());
app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

module.exports = app;
