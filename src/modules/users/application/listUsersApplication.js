const listUsers =
  ({ usersRepository }) =>
  async () =>
    await usersRepository.findAll();

module.exports = listUsers;
