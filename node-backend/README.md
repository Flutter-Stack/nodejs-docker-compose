Setting up the instance.


1. clone the //github.com/dcentrum/proj-iota-disne.git repository.
2. $ cp proj-iota-disne/disne-backend/.env-prod  proj-iota-disne/disne-backend/.env
  generate secrete key https://mherman.org/blog/token-based-authentication-with-node/.

  database details:
  I have created 2 projects for dev and prod.
  Development: edit proj-iota-disne/disne-backend/.env file
  and change MONGO_URI to MONGO_URI='mongodb+srv://Disne-dev:Disne-dev@cluster0-9avbt.gcp.mongodb.net/test' .

  Production: change the <password>  of MONGO_URI.

3. start the docker compose services
   $ cd proj-iota-disne  && docker-compose up -d

4. $ docker ps

   shows  container disne-backend is running on port 3000.

API:

1. Register :  http://35.162.102.130:3000/api/user/register

  Payload:
        {
          "first_name":"jlfdk;lksajfdl",
          "last_name":"jlfdk;lksajfdl",
          "email":"suresh.kumara@gmail.com",
          "phone":"9632324012",
          "country_code":"IN",
          "password": "sdjhfakfd"
        }

  Response:
   1. On Sucess:
        {
          "msg": "returns user id"
        }
   2. On Error:
       {
         "msg": "error message"
       }

 2. Login :  http://35.162.102.130:3000/api/user/login
   Payload:
         {
           "email":"suresh.kumara@gmail.com",
           "password": "sdjhfakfd"
         }

   Response:
    1. On Sucess:
         token
    2. On Error:
        {
          "msg": "error message"
        }




<!--

<b>Prerequisites<b>

- npm install
- npm start
  - This will start the Node Server on PORT 3000 and establish connection with MongoDB

Routes

1. localhost:5000/api/user/register
   - Payload: {name: req.body.name,
     email: req.body.email,
     password: req.body.password}
2. localhost:5000/api/user/login
   - Payload: {email: req.body.email,
     password: req.body.password} -->
