import express from "express";
import chalk from "chalk";

var app = express();
app.use(express.static("dist"));

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Started ${chalk.yellow("app")} on port ${port}`)
);
