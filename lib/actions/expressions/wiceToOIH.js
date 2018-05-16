const jsonata = require('jsonata');

module.exports.getExpression = function (msg) {
  const expression = {
    "oihUid": "",
    "oihCreated": "",
    "oihLastModified": jsonata("$now()").evaluate(),
    "oihApplicationRecords": [
      {
        "applicationUid": "",
        "recordUid": msg.body.rowid,
        "created": "",
        "lastModified": msg.body.last_update
      }
    ],
    "title": msg.body.title,
    "salutation": msg.body.salutation,
    "firstName": msg.body.firstname,
    "middleName": "",
    "lastName": msg.body.name,
  };
  return expression;
}
