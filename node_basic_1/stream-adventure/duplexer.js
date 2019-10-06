const duplexer2 = require('duplexer2');

const { spawn } = require('child_process');

const duplexer = (cmd, args) => {
  const child = spawn(cmd, args);

  return duplexer2(child.stdin, child.stdout);
};

module.exports = duplexer;
