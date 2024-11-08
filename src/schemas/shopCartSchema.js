const { gql } = require('apollo-server');

const typeDefs = gql`
  enum Category {
    ELECTRONICS
    CLOTHING
    FOOD
    TOYS
  }
  
  enum UserType {
    ADMIN
    WORKER
    CLIENT
  }

  enum FavPayMethod {
    PAYPAL
    APPLE_PAY
    CREDIT_CARD
    DEBIT_CARD
  }

  type Address {
    street: String
    exterior: String
    interior: String
    neighborhood: String
    city: String
    municipality: String
    zip: String
    state: String
    country: String
  }

  input AddressInput {
    street: String
    exterior: String
    interior: String
    neighborhood: String
    city: String
    municipality: String
    zip: String
    state: String
    country: String
  }

  type Product {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    category: Category!
    brand: String!
    stock: Int!
    creationDate: String
    imgs: [String]
    facturapiid: String
  }

  type User {
    _id: ID!
    fullName: String!
    email: String!
    password: String!
    address: Address
    phone: String
    regDate: String
    userType: UserType
    favPayMethod: FavPayMethod
    facturapiid: String
  }

  type Query {
    products: [Product]
    users: [User]
  }

  type Mutation {
    createProduct(
      name: String!,
      description: String,
      price: Float!,
      category: Category,
      brand: String,
      stock: Int,
      imgs: [String],
      facturapiid: String
    ): Product

    updateProduct(
      _id: ID!,
      name: String,
      description: String,
      price: Float,
      category: Category,
      brand: String,
      stock: Int,
      imgs: [String],
      facturapiid: String
    ): Product

    deleteProduct(_id: ID!): Product

    createUser(
      fullName: String!,
      email: String!,
      password: String!,
      address: AddressInput,
      phone: String,
      regDate: String,
      userType: UserType,
      favPayMethod: FavPayMethod,
      facturapiid: String
    ): User

    updateUser(
      _id: ID!,
      fullName: String,
      email: String,
      password: String,
      address: AddressInput,
      phone: String,
      regDate: String,
      userType: UserType,
      favPayMethod: FavPayMethod,
      facturapiid: String
    ): User

    deleteUser(_id: ID!): User
  }
`;

module.exports = typeDefs;
