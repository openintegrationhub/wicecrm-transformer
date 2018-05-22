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
async function processAction(msg) {
  const expression = getExpression(msg);
  // const stringifiedExpression = JSON.stringify(expression);
  // const compiledExpression = jsonata(stringifiedExpression);

  const result = await testFunction(msg, expression).then((res) => {
    return eioUtils.newMessageWithBody(res.body);
  });

  return result;
}

module.exports.process = processAction;
