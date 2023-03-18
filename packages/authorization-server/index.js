import express from "express";
import chalk from "chalk";

var app = express();
app.use(express.static("dist"));

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Started ${chalk.blue("authorization-server")} on port ${port}`)
);
