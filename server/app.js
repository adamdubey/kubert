const http = require("http");
const os = require("os");

const ip = "0.0.0.0"; // listen to incoming requests on a ClusterIP
const port = 3000;

const hostname = os.hostname();
const whoami = os.userInfo().username;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hi, I'm ${whoami}, from ${hostname}.\n`);
});

server.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
