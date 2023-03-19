import express from "express";
import chalk from "chalk";

import { SharedConfiguration } from "common/configuration/index.js";

var app = express();

const { protected_datastore_port: port } = SharedConfiguration;
app.listen(port, () =>
  console.log(`Started ${chalk.red("protected-datastore")} on port ${port}`)
);
