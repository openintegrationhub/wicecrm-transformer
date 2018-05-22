const jsonata = require('jsonata');

module.exports.getExpression = function (msg) {
  const expression = {
        "oihLastModified": jsonata("$now()").evaluate(),
        // "firstName": msg.body.firstname,
        // "middleName": "",
        // "lastName": msg.body.name

        "name": msg.body.lastName,
        "firstname": msg.body.firstName,
  };
  return expression;
}
