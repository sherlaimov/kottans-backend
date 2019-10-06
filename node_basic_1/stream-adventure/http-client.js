const fetch = require('node-fetch');

const url = 'http://localhost:8099';

fetch(url, { method: 'POST', body: process.stdin }).then(resp => resp.body.pipe(process.stdout));

/*
Solution with request

const request = require('request');
  const r = request.post('http://localhost:8099');
  process.stdin.pipe(r).pipe(process.stdout);

*/
