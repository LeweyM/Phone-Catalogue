const express = require("express");
const mockData = require("./mockData.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(response.error(err.status || 500));
});

function mockAsync(cb, ms) {
  setTimeout(function() {
    let err = null;
    cb(err);
  }, ms);
}
function mockAsyncErr(cb, ms) {
  setTimeout(function() {
    let err = new Error("mock async error");
    cb(err);
  }, ms);
}

app.get("/phones", (req, res, next) => {
  mockAsync(function(err) {
    if (err) return next(err);
    res.send({ payload: mockData });
  }, 2000);
});

app.get("/phonesErr", (req, res, next) => {
  mockAsyncErr(function(err) {
    if (err) return next(err);
    res.send({ payload: mockData });
  }, 2000);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
