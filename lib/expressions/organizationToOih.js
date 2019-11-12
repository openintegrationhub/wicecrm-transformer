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

// const jsonata = require('jsonata');

module.exports.getExpression = (msg) => {
  if (Object.keys(msg.body).length === 0 && msg.body.constructor === Object) {
    return msg.body;
  }

  const expression = {
    meta: {
      recordUid: msg.body.meta.recordUid,
      operation: msg.body.operation,
      applicationUid: (msg.body.meta.applicationUid !== undefined && msg.body.meta.applicationUid !== null) ? msg.body.meta.applicationUid : 'appUid not set yet',
      iamToken: (msg.body.meta.iamToken !== undefined && msg.body.meta.iamToken !== null) ? msg.body.meta.iamToken : undefined,
      domainId: (msg.body.meta.domainId !== undefined && msg.body.meta.domainId !== null) ? msg.body.meta.domainId : undefined,
      schema: (msg.body.meta.schema !== undefined && msg.body.meta.schema !== null) ? msg.body.meta.schema : undefined,
    },
    data: {
      name: msg.body.data.name,
      addresses: [{
        // street: ((msg.body.private_street === null) || (msg.body.private_street === '')) ? '' : jsonata(`$trim($substringBefore("${msg.body.private_street}", $split("${msg.body.private_street}", ' ')[-1]))`).evaluate(),
        street: ((msg.body.data.private_street === null) || (msg.body.data.private_street === '')) ? '' : msg.body.data.private_street,
        streetNumber: ((msg.body.data.private_street_number === null) || (msg.body.data.private_street_number === '')) ? '' : msg.body.data.private_street_number,
        // street: (msg.body.data.private_street === null) ? undefined : jsonata(`$trim($substringBefore("${msg.body.data.private_street}", $split("${msg.body.data.private_street}", ' ')[-1]))`).evaluate(),
        // streetNumber: (msg.body.data.private_street === null) ? undefined : jsonata(`$number($split("${msg.body.data.private_street}", " ")[-1])`).evaluate(),
        unit: '',
        zipCode: msg.body.data.private_zip_code ? msg.body.data.private_zip_code : '',
        city: msg.body.data.private_town ? msg.body.data.private_town : '',
        district: '',
        region: msg.body.data.private_state ? msg.body.data.private_state : '',
        country: msg.body.data.private_country ? msg.body.data.private_country : '',
        countryCode: msg.body.data.private_country_symbol ? msg.body.data.private_country_symbol : '',
        primaryContact: '',
        description: '',
      }],
    },

    // firstName: msg.body.firstname,
    // lastName: msg.body.name

    // oihUid: '',
    // oihCreated: '',
    // oihLastModified: '',
    // oihApplicationRecords: [{
    //   applicationUid: '',
    //   recordUid: msg.body.rowid
    // }],
    // salutation: msg.body.salutation,
    // firstName: msg.body.firstname,
    // middleName: '',
    // lastName: msg.body.name,
    // gender: '',
    // birthday: msg.body.birthday,
    // notes: '',
    // displayName: '',
    // language: '',
    // nickname: '',
    // jobTitle: msg.body.position,
    // photo: msg.body.picture_url,
    // anniversary: '',
    // addresses: [{
    //   // street: ((msg.body.private_street === null) || (msg.body.private_street === '')) ? '' : jsonata(`$trim($substringBefore("${msg.body.private_street}", $split("${msg.body.private_street}", ' ')[-1]))`).evaluate(),
    //   street: ((msg.body.private_street === null) || (msg.body.private_street === '')) ? '' : msg.body.private_street,
    //   streetNumber: ((msg.body.private_street_number === null) || (msg.body.private_street_number === '')) ? '' : msg.body.private_street_number,
    //   // street: (msg.body.private_street === null) ? undefined : jsonata(`$trim($substringBefore("${msg.body.private_street}", $split("${msg.body.private_street}", ' ')[-1]))`).evaluate(),
    //   // streetNumber: (msg.body.private_street === null) ? undefined : jsonata(`$number($split("${msg.body.private_street}", " ")[-1])`).evaluate(),
    //   unit: '',
    //   zipCode: msg.body.private_zip_code ? msg.body.private_zip_code : '',
    //   city: msg.body.private_town ? msg.body.private_town : '',
    //   district: '',
    //   region: msg.body.private_state ? msg.body.private_state : '',
    //   country: msg.body.private_country ? msg.body.private_country : '',
    //   countryCode: msg.body.private_country_symbol ? msg.body.private_country_symbol : '',
    //   primaryContact: '',
    //   description: ''
    // }],
    // contactData: [{
    //   value: msg.body.phone,
    //   type: 'phone',
    //   description: 'phone number'
    // },
    // {
    //   value: msg.body.phone2,
    //   type: 'phone',
    //   description: 'second phone number'
    // },
    // {
    //   value: msg.body.phone3,
    //   type: 'phone',
    //   description: 'third phone number'
    // },
    // {
    //   value: msg.body.mobile_phone,
    //   type: 'phone',
    //   description: 'mobile phone number'
    // },
    // {
    //   value: msg.body.private_mobile_phone,
    //   type: 'phone',
    //   description: 'private mobile phone number'
    // },
    // {
    //   value: msg.body.private_phone,
    //   type: 'phone',
    //   description: 'private phone number'
    // },
    // {
    //   value: msg.body.fax,
    //   type: 'fax',
    //   description: 'fax'
    // },
    // {
    //   value: msg.body.email,
    //   type: 'email',
    //   description: 'email'
    // },
    // {
    //   value: msg.body.private_email,
    //   type: 'email',
    //   description: 'private email'
    // },
    // {
    //   value: msg.body.xing_url,
    //   type: 'xing',
    //   description: 'xing'
    // }
    // ],
    // calendars: [],
    // categories: []
  };
  return expression;
};
