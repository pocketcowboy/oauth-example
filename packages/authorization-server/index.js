import express from "express";
import chalk from "chalk";

import {
  SharedConfiguration,
  ClientConfiguration,
} from "common/configuration/index.js";

var app = express();
app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded());

const { auth_server_port: port } = SharedConfiguration;

app.get("/authorize", (req, res) => {
  res.sendFile("index.html", { root: "dist" });
});

app.post("/grant-authorization", (req, res) => {
  console.log(req.body);
  res.redirect(ClientConfiguration.app_redirect_uri);
});

app.listen(port, () =>
  console.log(`Started ${chalk.blue("authorization-server")} on port ${port}`)
);
