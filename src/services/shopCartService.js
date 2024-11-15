const ShopCart = require('../models/shopCartModel');

const shopCartService = {
  getCartByUser: async (userId) => {
    return await ShopCart.find({ "user._id": userId });
  },
  getCartById: async (cartId) => {
    return await ShopCart.findById(cartId);
  },
  getAllShopCarts: async () => await ShopCart.find(),
  createCart: async (cartData) => {
    const newCart = new ShopCart(cartData);
    let subtotal = 0;
    for (let i = 0; i < newCart.product.length; i++) {
      subtotal += newCart.product[i].price; 
    }
    const iva = subtotal * 0.16; 
    const total = subtotal + iva;
    newCart.subtotal = subtotal;
    newCart.IVA = iva;
    newCart.total = total;
    return await newCart.save();
  },
  addProductToCart: async (cartId, product) => {
    const cart = await ShopCart.findById(cartId);
    if (cart && cart.status === 'ACTIVE') {
      cart.product.push(product);
      let newSubtotal = 0;
      newSubtotal = product.price + cart.subtotal;
      const iva = newSubtotal * 0.16;
      const total = newSubtotal + iva;
      cart.subtotal = newSubtotal;
      cart.IVA = iva;
      cart.total = total;
      return await cart.save();
    }
    throw new Error('Cannot add product to an inactive cart');
  },
  removeProductFromCart: async (cartId, productId) => {
    const cart = await ShopCart.findById(cartId);
    if (cart && cart.status === 'ACTIVE') {
      const productToRemove = cart.product.find(p => p._id === productId);
      
      if (!productToRemove) {
        throw new Error('Product not found in cart');
      }
      cart.product = cart.product.filter(p => p._id !== productId);
      let newSubtotal = cart.subtotal - productToRemove.price;
      const iva = newSubtotal * 0.16;
      const total = newSubtotal + iva;
      cart.subtotal = newSubtotal;
      cart.IVA = iva;
      cart.total = total;

      return await cart.save();
    }
    throw new Error('Cannot remove product from an inactive cart');
  },
  closeCart: async (cartId) => {
    const cart = await ShopCart.findById(cartId);
    if (cart) {
      cart.status = 'INACTIVE';
      cart.endDate = new Date();
      return await cart.save();
    }
    throw new Error('Cart not found');
  }
};

module.exports = shopCartService;
