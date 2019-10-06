const crypto = require('crypto');

const passPhrase = process.argv[2];

process.stdin.pipe(crypto.createDecipher('aes256', passPhrase)).pipe(process.stdout);
