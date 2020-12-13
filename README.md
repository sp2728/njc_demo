# njc_demo

Requirements:
1. Node.js
2. Postgres Sql
3. Expressjs
4. Postman tool for testing the API

Steps to run the Project:

1. git clone the project
2. Install the dependencies using the following command
```
npm install
```
3. Use the following command to run the project
```
nodemon ./bin/www
```
4. Open postman and paste the following urls to check the API's

  a. To add user, we need to send a body to the API request
  ```
  url: http://localhost:3000/addUser
  ```
  ```
  body:
  {
    "firstName":"Sai Kiran",
    "lastName":"Pocham",
    "email":"saikiran126798@gmail.com"
  }
  ```
  ```
  response:
  {
    "success": true,
    "status": "Registration Successful!"
  }
  ```
  
  b. To get users from the API request
  ```
  url: http://localhost:3000/users
  ```
  ```
  response:
  {
    "success": true,
    "status": "Users Retrieved Successfully!",
    "users": [
        {
            "id": 1,
            "firstName": "Sai Kiran",
            "lastName": "Pocham",
            "email": "saikiran126798@gmail.com",
            "createdAt": "2020-12-12T18:23:16.204Z",
            "updatedAt": "2020-12-12T18:23:16.204Z"
        }
        ]
   }
   ```
  
