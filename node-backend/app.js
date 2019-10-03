const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./schema');
const server = new ApolloServer({ typeDefs, resolvers });
port = process.env.PORT || 3000;

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
});
