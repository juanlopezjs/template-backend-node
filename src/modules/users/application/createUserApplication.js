const createUser =
  ({ usersRepository }) =>
  async (args) =>
    await usersRepository.create(args);

module.exports = createUser;
