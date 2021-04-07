require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const SessionDataSource = require("./datasources/sessions");
const SpeakerDataSource = require("./datasources/speakers");
const UserDataSource = require("./datasources/users");

const typeDefs = require("./schema.js");
const resolvers = require("./resolvers/index");
const auth = require("./utils/auth");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const dataSources = () => ({
  sessionDataSource: new SessionDataSource(),
  speakerDataSource: new SpeakerDataSource(),
  userDataSource: new UserDataSource(),
});

app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.applyMiddleware({ app });

var myServer = app.listen(process.env.PORT || 4000, () => {
  // var host = myServer.address().address;
  var port =  myServer.address().port;
  console.log(`the server is listening on port ${port}`);
  console.log(`the GraphQL server is listening on port ${port}/graphql`);
// To access the graphql playground it is yourdomain:yourport/graphql

//   require('dns').lookup(require('os').hostname(), function (err, host, fam) {
//     console.log(`On your local Machine it is running on http://${host}:${port}`,);
// })
 
});
