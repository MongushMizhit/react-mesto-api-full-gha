const { NODE_ENV } = process.env;
const { JWT_SECRET } = process.env;

const { MONGO_DB = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

const URL_EXP = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/im;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  MONGO_DB,
  URL_EXP,
};
