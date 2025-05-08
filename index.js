const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Deploy automático com GitHub Actions + Azure!");
});

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});