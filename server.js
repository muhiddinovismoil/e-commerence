import express from "express";
import cors from "cors";
import mongoose, { connect } from "mongoose";
import path from "node:path";
import cookieParser from "cookie-parser";
import { application, db } from "./src/config/index.js";
import { authRoutes } from "./src/routes/index.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  "/static",
  express.static(path.join(import.meta.dirname, "src", "public"))
);
// const testMiddleware = (a) => {
//   return (req, res, next) => {
//     console.log(a);
//     res.send(a);
//   };
// };


// app.use("/testa", testMiddleware("a"), (req, res, next) => {});
// app.use("/testb", testMiddleware("b"), (req, res, next) => {});

try {
  connect(db.uri);
  mongoose.connection.on("connected", () => console.log("connected"));
} catch (error) {
  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
}

app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something broke!");
});

if (application.node_env === "development") {
  console.log("DEVELOPMENT");
}

app.listen(application.port, () => {
  console.log(`server is running on port ${application.port}`);
});
