import express from "express";

import { ClientConfiguration } from "common/configuration/index.js";

const tokenGenerator = () => Math.random().toString(36).slice(2);

export const buildApp = (configuration, distDir, tokenGenerator) => {
  const app = express();

  app.use(express.static(distDir));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/authorize", (req, res) => {
    const isClientIdKnown = (req) =>
      req.query.client_id === configuration.app_client_id;
    const isRedirectUriKnown = (req) =>
      req.query.redirect_uri === configuration.app_redirect_uri;

    if (isClientIdKnown(req) && isRedirectUriKnown(req)) {
      res.sendFile("index.html", { root: distDir });
      return;
    }
    res.status(400).send("Authorization request invalid");
  });

  app.post("/approve", (req, res) => {
    const isResponseTypeCode = (req) => req.body.response_type === "code";

    if (isResponseTypeCode(req)) {
      const { redirect_uri } = req.body;
      res.redirect(`${redirect_uri}?code=${tokenGenerator()}`);
      return;
    }
    res.status(400).send("Approve request invalid");
  });

  return app;
};

export const app = buildApp(ClientConfiguration, "dist", tokenGenerator);
