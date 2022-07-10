module.exports = (model) => ({
  create: async (...args) => await model.create(...args),
  update: async (...args) => await model.update(...args),
  destroy: async (...args) => await model.destroy(...args),
  bulkCreate: async (...args) => await model.bulkCreate(...args),
});
