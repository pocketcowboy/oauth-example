import express from "express";
import chalk from "chalk";

import { SharedConfiguration } from "common/configuration/index.js";

var app = express();
app.use(express.static("dist"));

const { auth_server_port: port } = SharedConfiguration;

app.get("/authorize", (req, res) => {
  res.sendFile("index.html", { root: "dist" });
});

app.listen(port, () =>
  console.log(`Started ${chalk.blue("authorization-server")} on port ${port}`)
);
