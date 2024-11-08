const {productService, userService} = require('../services/shopCartService');

const resolvers = {
  Query: {
    products: async () => await productService.getProducts(),
    users: async() => await userService.getUsers(),
  },
  Mutation: {
    //Products mutations
    createProduct: async (_, args) => await productService.createProduct(args),
    updateProduct: async (_, args) => await productService.updateProduct(args),
    deleteProduct: async (_, { _id }) => await productService.deleteProduct(_id),
    //Users mutations
    createUser: async (_, args) => await userService.createUser(args),
    updateUser: async (_, args) => await userService.updateUser(args),
    deleteUser: async (_, args) => await userService.deleteUser(args),
  },
};

module.exports = resolvers;
