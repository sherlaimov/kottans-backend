const http = require('http');
const urls = process.argv.slice(2);

const promises = urls.map(url => {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      const bufferArray = [];
      response.on('data', data => {
        bufferArray.push(data);
      });

      response.on('error', reject);

      response.on('end', () => {
        const fullData = Buffer.concat(bufferArray).toString();
        resolve(fullData);
      });
    });
  });
});

const result = Promise.all(promises);
result.then(dataArry => {
  dataArry.forEach(site => {
    console.log(site);
  });
});
