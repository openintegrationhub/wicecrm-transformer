async function processTrigger(msg) {
  console.log('In process trigger');

  const person = {
    firstName: "John",
    lastName: "Doe"
  };

  console.log('PERSON: ', person);
  
  await this.emit('data', person);
  await  this.emit('end');

};

module.exports = {
  process: processTrigger,
};
