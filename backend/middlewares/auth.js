const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../constants/constants');
const UnauthorizedError = require('../errors/unauthorized-err');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new UnauthorizedError('Что-то не так с токеном'));
  }

  req.user = payload;
  return next();
};

module.exports = auth;
