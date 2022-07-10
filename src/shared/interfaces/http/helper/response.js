module.exports = ({ config }) => {
  const defaultResponse = (status, obj) => ({
    status,
    date: new Date(),
    ...obj,
  });

  const Success = (data) =>
    defaultResponse("success", {
      data,
    });

  const Fail = (data) =>
    defaultResponse("error", {
      codeStatus: data.status,
      message: data.message,
      ...(config.env === "development" && {
        stack: data.stack,
      }),
    });

  return {
    Success,
    Fail,
  };
};
