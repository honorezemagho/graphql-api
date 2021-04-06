const { ApolloServer } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');

const typeDefs = require('./schema');

const dataSources = () => ({
    sessionAPI : new SessionAPI(),
});

const resolvers = require('./resolvers');

const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
  .listen({port: process.env.PORT || 4000 })
  .then(({url}) => {
       console.log(`GraphQL is running at ${url}`)
  })