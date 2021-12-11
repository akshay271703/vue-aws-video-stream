## This is a file by file flow of the entire application

The first file that is called is server.js
``Operations inside server.js`

- Load the environment variables
- Define the PORT for the application
- `Get the application configuration` which is build inside the `config.js` file

  `config.js` file operation

  - Instantiate Express
  - Import os and express-form-data modules
  - Initialise options object which is similar to multiparty takes
  - app.use explanantions
    - express.json() is used to parse JSON values
    - formData.parse(options) is used to parse multi part form data
    - formData.stream() is used to convert incoming files to read streams which facilates file uploads
    - formData.union() is used to merge file objects in req.body

- After building the app object we export it and use it in the server.js file.
- Defining all routes to a centralised `routes.js` file.
- The `routes.js` file handle all route redirects.
- Start up the server.
