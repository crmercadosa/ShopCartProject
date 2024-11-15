const { gql } = require('apollo-server');

const shopCartTypeDefs = gql`
  type ProductInCart {
    _id: ID!
    name: String
    description: String
    price: Float
    category: String
    brand: String
    stock: Int
    creationDate: String
    imgs: [String]
    facturapiid: String
  }

  type UserInCart {
    _id: ID!
    fullName: String
    email: String
    password: String
  }

  type ShopCart {
    _id: ID!
    user: UserInCart!
    product: [ProductInCart]!
    subtotal: Float!
    IVA: Float!
    total: Float!
    status: String!
    creationDate: String!
    endDate: String
  }

  type Query {
    getCartByUser(userId: ID!): [ShopCart]
    getCartById(cartId: ID!): ShopCart
    getAllShopCarts: [ShopCart]
  }

  type Mutation {
    createCart(
      user: UserInCartInput!, 
      product: [ProductInCartInput]!
    ): ShopCart

    addProductToCart(
      cartId: ID!, 
      product: ProductInCartInput!
    ): ShopCart
    
    removeProductFromCart(
      cartId: ID!, 
      productId: ID!
    ): ShopCart
    
    closeCart(
      cartId: ID!
    ): ShopCart

  }

  input ProductInCartInput {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    category: String!
    brand: String!
    stock: Int
    creationDate: String
    imgs: [String]
    facturapiid: String
  }

  input UserInCartInput {
    _id: ID!
    fullName: String!
    email: String!
    password: String!
  }
`;

module.exports = shopCartTypeDefs;
