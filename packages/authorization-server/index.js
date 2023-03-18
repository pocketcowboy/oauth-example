import express from "express";
import chalk from "chalk";

import { AUTH_SERVER_PORT } from "common";

var app = express();
app.listen(AUTH_SERVER_PORT, () =>
  console.log(
    `Started ${chalk.blue("authorization-server")} on port ${AUTH_SERVER_PORT}`
  )
);
