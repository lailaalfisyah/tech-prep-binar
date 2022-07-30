# Run This Project with Command: `node app.js`

Runs the app in the development mode.\
You can test the API in Postman.

Before run the app, run the database server first.\
You can use XAMPP as one of MySQL DBMS.\
Then create a database on your local computer and adjust it in `config/config.json`.

## API for Authentication

### Register

`POST` [http://localhost:5000/api/auth/signup](http://localhost:5000/api/auth/signup)\
Create new user account to database with `name`, `email`, and `password` in request body.

### Login

`POST` [http://localhost:5000/api/auth/login](http://localhost:5000/api/auth/login)\
Match the `email` and `password` you have with the one in the database to give you access to the system.

## API for CRUD

### Show All Data

`GET` [http://localhost:5000/api/v1/products](http://localhost:5000/api/v1/products)\
Show all product data from database.

### Show One of The Data

`GET` [http://localhost:5000/api/v1/products/:id](http://localhost:5000/api/v1/products/:id)\
Show product data you want from database based on the `id`. You can fill `:id` with the product ID.

### Create Data

`POST` [http://localhost:5000/api/v1/products](http://localhost:5000/api/v1/products)\
Add new product data to database with `name`, `price`, and `imageurl` in request body.

### Update Data

`PUT` [http://localhost:5000/api/v1/products/:id](http://localhost:5000/api/v1/products/:id)\
Edit product data you want from database based on the `id`. You can fill `:id` with the product ID.

### Delete Data

`DELETE` [http://localhost:5000/api/v1/products/:id](http://localhost:5000/api/v1/products/:id)\
Delete product data you want from database based on the `id`. You can fill `:id` with the product ID.