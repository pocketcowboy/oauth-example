import express from "express";
import chalk from "chalk";

import { APP_PORT } from "common";

var app = express();
app.listen(APP_PORT, () =>
  console.log(`Started ${chalk.yellow("app")} on port ${APP_PORT}`)
);
