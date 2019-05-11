const express = require("express");
const data = require("./data.json");

const app = express();

app.get("/api/todos", function (_req, res) {
  res.status(200).send(data);
})

app.listen(3000, function () {
  console.log(`🚄 Server running @ http://localhost:3000`)
});
