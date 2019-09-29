var { buildSchema } = require("graphql");

exports.schema = buildSchema(`
  type Product {
    name: String,
    id: Int
  },
  type Query {
    hello: String,
    products: [Product]
  }
`);
/**
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
*/
const getProducts = () => {
  return Promise.resolve([{
    title: 'Movie'
  }]);
}  

exports.root = {
  hello: () => {
    return "Hello world!";
   },
  products: () => {
    return getProducts();
  }
};

// export { root };
// export default schema;