# livy

##### livy is a command line utiliy that checks uptime status of different services.

## Use cases:

- livy [service name]: checks uptime status of chosen service
- livy [service name] --watch: checks periodically for uptime status
- livy [service name] -o --filename: write output to a file
- livy [service name] --verbose: check for uptime status with verbose description

## Add services

livy parses js file to support different services. The services file can be found at&nbsp;`/src/lib/services.js`.
To add a new service:

- Create a new service object with:
  - URL of the service uptime status page ([What is uptime status page](https://help.statuspage.io/help/uptime-calendar)
  - Regex pattern to match for liveness indication.
- Expose the new object via module.exports
- Create PR!

## Info

- livy intersects the gap of knowing when service is down
- integrate with CI pipeline to lazy load modules

## Future thoughts

- Should services define in configuration format? (e.g.: TOML, JSON, YAML)
