const jsonata = require('jsonata');

module.exports.getExpression = function (msg) {
  const expression = {
        "oihLastModified": jsonata("$now()").evaluate(),
        "name": msg.body.lastName,
        "firstname": msg.body.firstName,
         "phone": jsonata("$lookup($filter(contactData, function($v, $i, $a) { $v.type = "phone" and $v.description = "primary"}), "value")").evaluate()
  };
  return expression;
}
