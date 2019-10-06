/*
An encrypted, gzipped tar file will be piped in on process.stdin. To beat this
challenge, for each file in the tar input, print a hex-encoded md5 hash of the
file contents followed by a single space followed by the filename, then a
newline.

You will receive the cipher name as process.argv[2] and the cipher passphrase as
process.argv[3]. You can pass these arguments directly through to
`crypto.createDecipher()`.
*/

const crypto = require('crypto');
const zlib = require('zlib');
const tar = require('tar');

const cipherName = process.argv[2];
const passPhrase = process.argv[3];

const decipher = crypto.createDecipher(cipherName, passPhrase);

const parser = new tar.Parse();
parser.on('entry', readS => {
  readS.pipe(crypto.createHash('md5', { encoding: 'hex' })).on('data', d => {
    if (readS.type === 'File') {
      console.log(`${d.toString()} ${readS.path}`);
    }
  });
});

process.stdin
  .pipe(decipher)
  .pipe(zlib.createGunzip())
  .pipe(parser);
