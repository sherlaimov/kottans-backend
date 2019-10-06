const http = require('http');
const url = process.argv[2];

http.get(url, response => {
  const bufferArray = [];
  response.on('data', data => {
    bufferArray.push(data);
  });

  response.on('end', () => {
    const fullData = Buffer.concat(bufferArray).toString();
    console.log(fullData.length);
    console.log(fullData);
  });
});

/*

    'use strict'
    const http = require('http')
    const bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })


*/
