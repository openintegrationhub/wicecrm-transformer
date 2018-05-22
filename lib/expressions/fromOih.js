const jsonata = require('jsonata');

module.exports.getExpression = function (msg) {
  const expression = {
        "oihLastModified": jsonata("$now()").evaluate(),
        "name": msg.body.lastName,
        "firstname": msg.body.firstName,
  };
  return expression;
}
