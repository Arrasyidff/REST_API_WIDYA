# REST_API_WIDYA

This time I got a project to create a simple register & login API

- Features
  - register => user can register, if dont have account
  - login => if user have account, user can login
  - if register, data will be enter to database
  - user can see their data, if have a access_token or authentication

**Register**

- **URL**

  <https://widyarobotic.herokuapp.com/register>

- **Method**

  POST

- **Body**

  - name
  - email
  - password
  - genderId

- **Example**

  genderId have 2 value, if user input 1 user choose a male for gender, than user input 2 user choose female for gender. For the example i input 1 for male gender 

  ```json
  {
      "name": "arfafa",
      "email": "arfafa@mail.com",
      "password": "arfafa",
      "genderId": 1
  }
  ```

- **Success Response**

  ```json
  {
    "data": {
      "name": "kiraa",
      "email": "kira@mail.com",
      "gender": "male"
    }
  }
  ```

- **Bad Response**

  - status: 400
  - If name empty
  ```json
  {
    "msg": "name can't be empty"
  }
  ```

  - status: 400
  - If name less than 5 character
  ```json
  {
    "msg": "name min 5 character"
  }
  ```

  - status: 400
  - If email empty
  ```json
  {
    "msg": "email can't be empty"
  }
  ```

  - status: 401
  - If email already exist, because email is unique type
  ```json
  {
    "msg": "email already exist"
  }
  ```

  - status: 400
  - If email not email format
  ```json
  {
    "msg": "email must be email format"
  }
  ```

  - status: 400
  - If password empty
  ```json
  {
    "msg": "password can't be empty"
  }
  ```

  - status: 400
  - If password less than 5 character
  ```json
  {
    "msg": "password min 5 character"
  }
  ```

<br>
<br>

**Login**

- **URL**

  <https://widyarobotic.herokuapp.com/register>

- **Method**

  POST

- **Body**

  - email
  - password

- **Example**

  ```json
  {
      "email": "arfafa@mail.com",
      "password": "arfafa"
  }
  ```

- **Success Response**

  if the process is successful, then the server will provide access_token which will be used for authentication when viewing the data later

  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmZhZmFAbWFpbC5jb20iLCJpYXQiOjE2MTc3Nzc2OTV9.C3E_6TceoTjUKB12j6HEPeDH_w_99VyEtC1ic6WIatQ"
  }
  ```

- **Bad Response**

  - status: 401
  - If invalid input email / password
  ```json
  {
    "msg": "Invalid email / Password"
  }
  ```

<br>
<br>

**Enter**

- **URL**

  <https://widyarobotic.herokuapp.com/user>

- **Method**

  GET

- **headers**

  - access_token

- **Success Response**

  The token given by the server is used for the authentication process in the headers

  ```json
  {
    "name": "arfafa",
    "email": "arfafa@mail.com",
    "gender": "male"
  }
  ```

- **Bad Response**

  - status: 400
  - If user dont have a access_token for authentication 
  ```json
  {
    "msg": "Login First"
  }
  ```