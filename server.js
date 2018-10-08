const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/phones", (req, res) => {
  res.send({ data: "list of phone data" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
