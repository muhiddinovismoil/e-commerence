import express from "express";
import { authRouter, blogRouter } from "./src/routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.use((err, req, res, next) => {

  if (err) {
    return res.status(500).send(err.message)
  }
});

app.listen(3000, () => {
  console.log("3000");
});
