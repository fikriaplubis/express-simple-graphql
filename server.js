const express           = require('express');
const cors              = require('cors');

const { createServer }  = require('http');
const { ApolloServer }  = require('apollo-server-express');

const typeDefs          = require('./graphql/schemas');
const resolvers         = require('./graphql/resolvers');

const app = express();
app.use(cors());

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: {
        settings: {
            'schema.polling.enable': false,
        },
    },
});

apolloServer.applyMiddleware({ app, path: '/api' });

const server = createServer(app);

module.exports = server;