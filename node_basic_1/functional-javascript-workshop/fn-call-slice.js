function myFunction() {}

const slice = myFunction.call.bind(Array.prototype.slice);

module.exports = slice;

// module.exports = Function.prototype.call.bind(Array.prototype.slice);
