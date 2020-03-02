const axios = require('axios').default;
const services = require('./services');
var argv = require('minimist')(process.argv.slice(2));

if(argv._.length !== 1)
    throw new Error('Some message');

async function getStatus(service)
{
    const regex = new RegExp('<.*"' + service.atrName + '".*>(.*)', 'gm');
    let response = await axios.get(service.url);
    console.log(regex.exec(response.data) !== null);
}

for(let service of services)
{
    if(service.name == argv._[0])
    {
        getStatus(service);
        break;
    }
}