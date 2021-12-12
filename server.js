/* eslint-disable no-undef */
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = require('./config');

// Application Routing
app.use('/', require('./routes/routes'));

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
