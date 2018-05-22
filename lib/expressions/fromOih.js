const jsonata = require('jsonata');

module.exports.getExpression = function (msg) {
  const expression = {
        "oihLastModified": jsonata("$now()").evaluate(),
        "firstname": msg.body.firstName,
        "name": msg.body.lastName
  };
  return expression;
}
