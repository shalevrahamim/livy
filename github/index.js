const request = require('request');

const statusClassName = 'status font-large';
const upMessage = 'All Systems Operational';
const url = 'https://www.githubstatus.com/';

request.get(url, (err, res, body) => {
    if(err)
        return;
    let statusClassIndex = body.indexOf(statusClassName);
    let startMessageIndex = body.indexOf('>', statusClassIndex);
    let endMessageIndex = body.indexOf('<', statusClassIndex);
    let statusMessage = body.substring(startMessageIndex+1, endMessageIndex);
    if(statusMessage.includes(upMessage))
        console.log('TRUE: ' + statusMessage);
    else
        console.log('FALSE: ' + statusMessage);
});