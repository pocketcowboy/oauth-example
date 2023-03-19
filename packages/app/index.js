import express from "express";
import chalk from "chalk";
import qs from "query-string";

import {
  ClientConfiguration,
  SharedConfiguration,
} from "common/configuration/index.js";

const { auth_server_authorize_endpoint } = SharedConfiguration;
const { app_client_id, app_redirect_uri } = ClientConfiguration;

var app = express();
app.use(express.static("dist"));

app.get("/callback", (req, res) => {
  res.sendFile("index.html", { root: "dist" });
});

app.post("/begin-authorization", (req, res) => {
  const authUri = `${auth_server_authorize_endpoint}?${qs.stringify({
    response_type: "code",
    client_id: app_client_id,
    redirect_uri: app_redirect_uri,
  })}`;

  res.redirect(authUri);
});

const { app_port: port } = ClientConfiguration;
app.listen(port, () =>
  console.log(`Started ${chalk.yellow("app")} on port ${port}`)
);
