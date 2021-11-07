const _ = require('lodash');
const fs = require('fs');

let data;
try {
  data = fs.readFileSync(process.argv[2], 'utf8').split('\n')
  data = data.slice(0, data.length - 1)
} catch (err) {
  console.error(err)
}

function main () {
  console.log(data)
}

main();