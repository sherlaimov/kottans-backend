// Partial Application with Bind

const logger = namespace => console.log.bind(console, namespace);

module.exports = logger;
