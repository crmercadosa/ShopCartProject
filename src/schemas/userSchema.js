const { gql } = require('apollo-server');

const userTypeDefs = gql`
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
    users: [User]
  }

  type Mutation {
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

module.exports = userTypeDefs;
