const request = require('request');

const statusName = "status font-large";
const statusSuccess = "All Systems Operational";
const url = "https://www.githubstatus.com/";

request.get(url, (err, res, body) => {
    if(err)
        return;
    let statusPoint = body.indexOf(statusName);
    let startPoint = body.indexOf(">", statusPoint);
    let endPoint = body.indexOf("<", statusPoint);
    let status = body.substring(startPoint+1, endPoint);
    if(status.includes(statusSuccess))
        console.log("TRUE: " + status);
    else
        console.log("FALSE: " + status);
});