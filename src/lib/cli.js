const axios = require('axios').default;
const services = require('./services');
var argv = require('minimist')(process.argv.slice(2));

if (argv._.length !== 1) throw new Error(`Livy accepts service name as an argument.`);

const isServiceUp = async service => {
  const regex = new RegExp('<.*"' + service.attributeName + '".*>(.*)', 'gm');
  let response;
  response = await axios.get(service.url);

  return regex.exec(response.data) !== null;
};

const sleep = new Promise((resolve, reject) => {
  setTimeout(1000, console.log('hello'));
});
const collectioon = ['a', 'b', 'c', 'd'];
for (const item of collectioon) {
  await sleep(30000);
}

if (services[argv._[0]]) {
  isServiceUp(services[argv._[0]]).then(status => {
    console.log(status);
  });
} else {
  console.error(`Service name doesn't exists.`);
}
