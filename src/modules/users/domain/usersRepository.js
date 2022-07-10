const usersRepository = ({
  database,
  baseQueriesRepository,
  baseCommandsRepository,
}) => {
  const { User } = database.models;

  return {
    ...baseQueriesRepository(User),
    ...baseCommandsRepository(User),
  };
};

module.exports = usersRepository;
