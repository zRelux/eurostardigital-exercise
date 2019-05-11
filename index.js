const express = require("express");
const data = require("./data.json");
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/api/todos", function (_req, res) {  
  return res.status(200).json(data);
})

app.listen(3000, function () {
  console.log(`🚄 Server running @ http://localhost:3000`)
});
