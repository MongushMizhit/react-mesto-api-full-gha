const errorHandler = (err, req, res, next) => {
  // Если у ошибки нет статуса, устанавливаем статус 500
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });

  // Вызываем next() в конце обработчика
  next();
};

module.exports = errorHandler;
