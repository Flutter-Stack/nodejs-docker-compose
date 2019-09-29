https://softchris.github.io/pages/graphql-express.html#why-graphql

Building a GraphQL server using Node.js and Express,


1. Building blocks
A GraphQL Server consists of the following:

a schema, the schema defines our entities but also what we can query or call a mutation on
resolvers, resolver functions talks to a 3rd party API or our database and ends up returning data back to our user

2. Install dependencies
Let’s start off by installing our needed dependencies. We need the following:

express, to create our web server
graphql, to install graphql, our core lib that enables us to leverage graphql
express-graphql, this library enables us to bind together graphql and express

express and graphql and create a REST api, but we can do this better by adding express-graphql,