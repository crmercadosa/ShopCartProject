  const {Product, User} = require('../models/shopCartModel');
  const facturapi = require('../apis/facturapi');

  const productService = {
    getProducts: async () => await Product.find(),
    createProduct: async (args) => {
      const product = new Product(args);
      const facturapiProduct = await facturapi.createProduct(product);
      product.facturapiid = facturapiProduct.id;
      return await product.save();
    },
    updateProduct: async ({ _id, ...rest }) => {
      return await Product.findByIdAndUpdate(_id, rest, { new: true });
    },
    deleteProduct: async (_id) => {
      const product = await Product.findById(_id);
      await facturapi.deleteProduct(product.facturapiid);
      return await Product.findByIdAndDelete(_id);
    }
  };

  const userService = {
    getUsers: async () => await User.find(),
    createUser: async (args) => {
      const user = new User(args);
      const facturapiCustomer = await facturapi.createUser(user);
      user.facturapiid = facturapiCustomer.id;
      return await user.save();
    },
    updateUser: async ({_id, ...rest}) => {
      return await User.findByIdAndUpdate(_id, rest, {new: true});
    },
    deleteUser: async (_id) => {
      const user = await User.findById(_id);
      await facturapi.deleteUser(user.facturapiid);
      return await User.findByIdAndDelete(_id);
    }
  };

  module.exports = {productService, userService};
