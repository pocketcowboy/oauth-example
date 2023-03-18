import express from "express";
import chalk from "chalk";

import { DATASTORE_PORT } from "common";

var app = express();
app.listen(DATASTORE_PORT, () =>
  console.log(
    `Started ${chalk.red("protected-datastore")} on port ${DATASTORE_PORT}`
  )
);
