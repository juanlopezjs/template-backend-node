module.exports = ({ apiRouter, usersController }) => {
  apiRouter.get("/", usersController.index);
  apiRouter.post("/", usersController.store);

  return apiRouter;
};
