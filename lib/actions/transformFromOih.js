/* eslint no-invalid-this: 0 no-console: 0 */

const { getExpression } = require('./../expressions/fromOih.js');
const transform = require('./transformFromOih.js')
/**
 * This method will be called from elastic.io platform providing following data
 *
 * @param msg incoming message object that contains ``body`` with payload
 * @param cfg configuration that is account information and configuration field values
 */
function processAction(msg) {
  const expression = getExpression(msg);
  // const stringifiedExpression = JSON.stringify(expression);
  // const compiledExpression = jsonata(stringifiedExpression);

  transform.processAction(msg, expression).then((res) => {
    console.log(res);
  });

}

module.exports.process = processAction;
