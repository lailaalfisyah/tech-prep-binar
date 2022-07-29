# Run This Project with Command: `node app.js`

Runs the app in the development mode.\
You can test the API in Postman.

## API for Authentication

### Register

`POST` [http://localhost:5000/api/auth/signup](http://localhost:5000/api/auth/signup)\
Create new user account to database with `name`, `email`, and `password` in request body.

### Login

`POST` [http://localhost:5000/api/auth/login](http://localhost:5000/api/auth/login)\
Match the `email` and `password` you have with the one in the database to give you access to the system.