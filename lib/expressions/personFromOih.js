/* eslint max-len: 'off' */
/**
 * Copyright 2018 Wice GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const jsonata = require('jsonata');

module.exports.getExpression = (msg) => {
  if (Object.keys(msg.body).length === 0 && msg.body.constructor === Object) {
    return msg.body;
  }

  const expression = {
    meta: {
      operation: msg.body.operation,
      oihUid: msg.body.meta.oihUid ? msg.body.meta.oihUid : undefined,
      applicationUid: msg.body.meta.applicationUid ? msg.body.meta.applicationUid : undefined,
      iamToken: msg.body.meta.iamToken ? msg.body.meta.iamToken : undefined,
      recordUid: msg.body.meta.recordUid,
    },
    data: {
      name: msg.body.data.lastName,
      firstname: msg.body.data.firstName,
      position: msg.body.data.jobTitle,
      picture_url: msg.body.data.photo,
      salutation: msg.body.data.salutation,
      email: (msg.body.data.contactData && msg.body.data.contactData.length > 0) ? (jsonata(`$filter(${JSON.stringify(msg.body.data.contactData)}, function($v) { $v.type = 'email'})`).evaluate()).value : undefined,
      mobile_phone: (msg.body.data.contactData && msg.body.data.contactData.length > 0) ? (jsonata(`$filter(${JSON.stringify(msg.body.data.contactData)}, function($v) { $v.type = 'mobil'})`).evaluate()).value : undefined,
      phone: (msg.body.data.contactData && msg.body.data.contactData.length > 0) ? (jsonata(`$filter(${JSON.stringify(msg.body.data.contactData)}, function($v) { $v.type = 'phone'})`).evaluate()).value : undefined,
    },
  };

  return expression;
};
