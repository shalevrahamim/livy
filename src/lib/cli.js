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

if (services[argv._[0]]) {
  isServiceUp(services[argv._[0]]).then(status => {
    console.log(status);
  });
} else {
  console.error(`Service name doesn't exists.`);
}
