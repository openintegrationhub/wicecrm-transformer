/* eslint no-invalid-this: 0 no-console: 0 */
const eioUtils = require('elasticio-node').messages;

const { getExpression } = require('./../expressions/fromOih.js');
const { testFunction } = require('./transform.js')
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
  let result;
  testFunction(msg, expression).then((res) => {
    result = res;
    console.log(`RESULT: ${result}`);
  });

  // return Promise.resolve(eioUtils.newMessageWithBody(result));
}

module.exports.process = processAction;
