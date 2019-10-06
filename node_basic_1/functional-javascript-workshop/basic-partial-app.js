// Partial Application without Bind

const logger = namespace => (...strArgs) => {
  console.log(namespace, ...strArgs);
};

module.exports = logger;
