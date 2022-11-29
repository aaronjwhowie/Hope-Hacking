const express = require("express");
const fs = require("fs")
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.write(data);
    res.end();
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
