const controller = ({
  listUsersApplication,
  createUserApplication,
  response: { Success },
}) => ({
  index: async (req, res, next) => {
    try {
      const users = await listUsersApplication();
      res.status(200).json(Success(users));
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res, next) => {
    try {
      const { body } = req;
      const user = await createUserApplication(body);
      res.status(201).json(Success(user));
    } catch (error) {
      next(error);
    }
  },
});

module.exports = controller;
