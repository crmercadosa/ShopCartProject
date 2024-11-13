const User = require('../models/userModel');
const facturapi = require('../apis/facturapi');

const userService = {
  getUsers: async () => await User.find(),
  createUser: async (args) => {
    const user = new User(args);
    const facturapiCustomer = await facturapi.createUser(user);
    user.facturapiid = facturapiCustomer.id;
    return await user.save();
  },
  updateUser: async ({ _id, ...rest }) => {
    const user = await User.findById(_id);
    await facturapi.updateUser(user.facturapiid, rest);
    return await User.findByIdAndUpdate(_id, rest, { new: true });
  },
  deleteUser: async (_id) => {
    const user = await User.findById(_id);
    await facturapi.deleteUser(user.facturapiid);
    return await User.findByIdAndDelete(_id);
  }
};

module.exports = userService;
