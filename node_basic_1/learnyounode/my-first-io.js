const fs = require('fs');

const filePath = process.argv[2];

const file = fs.readFileSync(filePath);
const str = file.toString('utf-8');

const newLines = str.split('\n').length - 1;
console.log(newLines);
