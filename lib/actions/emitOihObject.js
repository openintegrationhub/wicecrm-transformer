module.exports.emitOihObject = async (msg) => {
  const person = {
    firstName: "John",
    lastName: "Doe"
  };

  await this.emit('data', person);
  await  this.emit('end');

};
