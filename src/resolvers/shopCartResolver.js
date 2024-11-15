const shopCartService = require('../services/shopCartService');

const shopCartResolvers = {
  Query: {
    getCartByUser: (_, { userId }) => shopCartService.getCartByUser(userId),
    getCartById: (_, { cartId }) => shopCartService.getCartById(cartId),
    getAllShopCarts: async () => await shopCartService.getAllShopCarts(),
  },
  Mutation: {
    createCart: (_, { user, product }) => shopCartService.createCart({ user, product }),
    addProductToCart: (_, { cartId, product }) => shopCartService.addProductToCart(cartId, product),
    removeProductFromCart: (_, { cartId, productId }) => shopCartService.removeProductFromCart(cartId, productId),
    updateCart: (_, { cartId, updates }) => shopCartService.updateCart(cartId, updates),
    closeCart: (_, { cartId }) => shopCartService.closeCart(cartId)
  }
};

module.exports = shopCartResolvers;
