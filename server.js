import express from "express";
import morgan from "morgan";
import { authRouter, blogRouter } from "./src/routes/index.js";
import { logger } from "./src/utils/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  logger.info(`Server started on port  ${3000}`);
});
