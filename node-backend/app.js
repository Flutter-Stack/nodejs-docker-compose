var  express = require("express");
const app = express();
var graphqlHTTP = require("express-graphql");
var schema,root  = require("./schema");

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});