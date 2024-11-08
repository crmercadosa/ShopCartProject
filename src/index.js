// src/index.js
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/shopCartSchema');
const resolvers = require('./resolvers/shopCartResolver');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://CrissCross20:CMS192001@cluster0.rvuph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();
