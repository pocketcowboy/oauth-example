import express from "express";
import chalk from "chalk";

import { ClientConfiguration } from "common/configuration/index.js";

var app = express();
app.use(express.static("dist"));

const { app_port: port } = ClientConfiguration;
app.listen(port, () =>
  console.log(`Started ${chalk.yellow("app")} on port ${port}`)
);
