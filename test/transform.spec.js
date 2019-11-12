/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */

const { expect } = require('chai');
const { messages } = require('elasticio-node');
const { personFromOih, personToOih } = require('./seed/person');
const transformPersonFromOih = require('../lib/actions/transformPersonFromOih');
const transformPersonToOih = require('../lib/actions/transformPersonToOih');

describe('Transformation test', () => {
  it.only('should handle simple person tranformation in direction from OIH', () => {
    const exp = personFromOih();
    return transformPersonFromOih.process(messages.newMessageWithBody(exp))
      .then((result) => {
        expect(result.body).to.be.an('object');
        expect(result.body.data.firstname).to.be.equal('John');
        expect(result.body.data.name).to.be.equal('Doe');
        console.log(result.body.data);
        expect(result.body.data).to.deep.include({
          name: 'Doe',
          firstname: 'John',
          position: 'Sales manager',
          email: 'john@doe.com',
          phone: '00224477',
          mobile_phone: '123456789',
          // private_street: 'Hohestr',
          // private_street_number: '3',
          // private_zip_code: '50667',
          // private_town: 'Cologne',
          // private_country: 'Germany',
        });
      });
  });

  it('should produce an empty message if transformation returns undefined', () => {
    return transformPersonFromOih.process(messages.newMessageWithBody({}))
      .then((result) => {
        expect(result).to.be.undefined;
      });
  });

  it('should handle simple person tranformation in direction to OIH', () => {
    const exp = personToOih();
    return transformPersonToOih.process(messages.newMessageWithBody(exp))
      .then((result) => {
        expect(result.body).to.be.an('object');
        expect(result.body.data.firstName).to.be.equal('Mark');
        expect(result.body.data.lastName).to.be.equal('Smith');
        expect(result.body.data.jobTitle).to.be.equal('Marketing Manager');
        expect(result.body.data.addresses).to.be.an('array');
        expect(result.body.data.addresses[0]).to.deep.include({
          street: 'Main Str.',
          streetNumber: '120',
        });
      });
  });

  it('should produce an empty message if transformation returns undefined', () => {
    return transformPersonToOih.process(messages.newMessageWithBody({}))
      .then((result) => {
        expect(result).to.be.undefined;
      });
  });
});
