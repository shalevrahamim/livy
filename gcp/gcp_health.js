const axios = require("axios");

const GCP_URL = "https://status.cloud.google.com";

const gcp_health_check = async () => {
  let response;
  try {
    response = await axios.get(GCP_URL);
  } catch (e) {
    console.error(e);
  }

  // We want to check for uptime indication
  // couple of ways to achieve this:
  // Option A: use regexp match pattern to extract text
  const matches = /<spanclass="status">(.*?)<\/span>/gm.exec(
    '<spanclass="status">Allservicesavailable</span>'
  );

  // Optional..
  if (matches[1] === "Allservicesavailable") {
    // console.log(`Uptime status: Alive`);
    // console.log(`Uptime message: ${matches[1]}`);
    return true;
  } else {
    // throw exception to communicate uptime failure checks
    throw new Error("Uptime check failed");
  }

  // Option B: use strings includes (from ES2016)
  // console.log(response.data.includes("All services available"));
  // return response.data.includes("All services available");
  // Issue with inclues is that you have to use indexOf to get the
  // location of the target match. Makes life a bit complicated...
};

// Small test runner to validate the POC
// for a small number of connections (THRESHOLD SHOULD BE DEFINED)
const test_runner = async (iters = 10) => {
  const executions = [];
  for (const iter of new Array(iters)) {
    executions.push(gcp_health_check());
  }

  Promise.all(executions)
    .then(() => {
      console.log("PASSED.");
    })
    .catch(e => {
      console.error(e);
    });
};

test_runner(100);
