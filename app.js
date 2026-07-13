const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(8080, () => {
  console.log("Server started on 8080");
});
