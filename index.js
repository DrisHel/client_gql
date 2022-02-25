const { ApolloServer, gql} = require('apollo-server');
const fs = require('fs');
const typeDefs = gql(fs.readFileSync('./graphql/typeDefs.graphql',{ encoding:'utf-8'}));
const resolvers = require("./graphql/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
