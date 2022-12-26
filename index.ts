import * as express from "express";
import * as cors from "cors";
import * as http from "http";
import * as busboy from "connect-busboy";
import * as busboyBodyParser from "busboy-body-parser";
import * as compression from "compression";
import { configs } from "./configs";
import * as path from "path";
import { connect } from "./database/db";
import { api } from "./routes/api";
try {
  const app = express();
  //middleware
  app.use(cors());
  app.use(busboy());
  app.use(busboyBodyParser());
  //parser for post data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //for gzipping
  app.use(compression());

  // api route
  app.use("/api", api);

  // connected to mongodb
  connect();

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

  const port = configs.PORT || 8080;
  app.set("port", port);

  const server = http.createServer(app);

  server.listen(port, () => console.info(`Api running on localhost:${port}`));
  module.exports = app;
} catch (error) {
  process.exit(1);
}
