const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, enum: ['ELECTRONICS', 'CLOTHING', 'FOOD', 'TOYS'], required: true },
  brand: { type: String, required: true }, 
  stock: { type: Number, default: 0 },
  creationDate: { type: Date, default: Date.now },
  imgs: [String],
  facturapiid: {type: String, required: true}
});

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { 
    street: { type: String, default: null },
    exterior: { type: String, default: null },
    interior: { type: String, default: null },
    neighborhood: { type: String, default: null },
    city: { type: String, default: 'N/A' },
    municipality: { type: String, default: 'N/A' },
    zip: { type: String, default: 'N/A' },
    state: { type: String, default: 'N/A' },
    country: { type: String, default: 'MEX' },
  },
  phone: { type: String, required: false, default: 'N/A' },
  regDate: { type: Date, default: Date.now },
  userType: { type: String, enum: ['ADMIN','WORKER','CLIENT'], default: 'CLIENT' },
  favPayMethod: { type: String, enum: ['PAYPAL', 'APPLE_PAY', 'CREDIT_CARD', 'DEBIT_CARD'], default: 'N/A' },
  facturapiid: { type: String, required: true}
});

const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);


module.exports = { Product, User };
