const express = require("express");

const app = express();

app.get("/api/ping", (req, res) => {
  res.send("Pong!");
});

app.get("/api/status", (req, res) => {
  res.send({
    message: "OK",
    timestamp: Date.now(),
  });
});

app.get("/api/hello", (req, res) => {
  res.send({
    message: "Greetings, Citizen of the Internet!",
  });
});

const PORT = process.env.port || 5000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT);
}
console.log(`Server running on Port ${PORT}`);

module.exports = app;
