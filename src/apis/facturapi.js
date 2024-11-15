const Facturapi = require('facturapi').default;

const facturapi = new Facturapi (
    "sk_test_jLRJG6PxvdNQa14wB8gmbKexaGqOp3bYAEKW7koD8n"
);

// Products functions
async function createProduct (product){
    const facturapiProduct = {
        description: product.description,
        product_key: "50403801",
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
}

async function updateProduct(id, updates) {
    return await facturapi.products.update(id, updates);
}

async function deleteProduct (id){
    return await facturapi.products.del(id)
}

// Users functions
async function createUser (user){
    const facturapiCustomer = {
        legal_name: user.fullName,
        tax_id: 'ABC101010111',
        tax_system: '601',
        email: user.email,
        address: user.address,
        phone: user.phone
    };
    return await facturapi.customers.create(facturapiCustomer)
}

async function updateUser(id, updates) {
    return await facturapi.customers.update(id, updates);
}

async function deleteUser (id){
    return await facturapi.customers.del(id)
}

module.exports = { 
    createProduct,
    updateProduct,
    deleteProduct,
    createUser,
    updateUser,
    deleteUser
};