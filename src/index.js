// src/index.js
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const productTypeDefs = require('./schemas/productSchema');
const userTypeDefs = require('./schemas/userSchema');
const shopCartTypeDefs = require('./schemas/shopCartSchema');
const productResolvers = require('./resolvers/productResolver');
const userResolvers = require('./resolvers/userResolver');
const shopCartResolvers = require('./resolvers/shopCartResolver');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://CrissCross20:CMS192001@cluster0.rvuph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  
  const server = new ApolloServer({
    typeDefs: [productTypeDefs, userTypeDefs, shopCartTypeDefs],
    resolvers: [productResolvers, userResolvers, shopCartResolvers]
  });
  
  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();
