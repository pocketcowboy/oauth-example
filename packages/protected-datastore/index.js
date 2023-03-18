import express from "express";
import chalk from "chalk";

var app = express();

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log(`Started ${chalk.red("protected-datastore")} on port ${port}`)
);
