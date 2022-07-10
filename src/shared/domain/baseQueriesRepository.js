module.exports = (model) => ({
  findById: async (...args) => await model.findByPk(...args),
  findAll: async (...args) => await model.findAll(...args),
  findOne: async (...args) => await model.findOne(...args),
  findAndCountAll: async (...args) => await model.findAndCountAll(...args),
});
