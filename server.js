/* eslint-disable no-undef */
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = require('./config');

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
