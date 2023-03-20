import chalk from "chalk";

import { SharedConfiguration } from "common/configuration/index.js";
import { app } from "./server.js";

const { auth_server_port: port } = SharedConfiguration;

app.listen(port, () =>
  console.log(`Started ${chalk.blue("authorization-server")} on port ${port}`)
);
