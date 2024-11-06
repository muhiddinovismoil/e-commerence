import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const users = new Map();

app.use(express.json());

const authorizationGuard = (req, res, next) => {
  try {
    const { email } = req.body;
    const token = req.headers?.authorization.split(" ")[1];

    jwt.verify(token, "qwer12345", (err, decode) => {
      if (err) {
        return res.status(401).send("un authorization");
      }
      req.user = decode
      next();

    });
  } catch (error) {
    next(error);
  }
};

app.post("/auth/register", (req, res) => {
  const { email } = req.body;
  const user = users.has(email);
  if (!user) {
    users.set(email, req.body);
    return res.status(201).send("Created");
  }
  return res.status(409).send("User already exists");
});

app.post("/auth/login", (req, res) => {
  try {
    const { email } = req.body;
    const user = users.has(email);
    if (!user) {
      return res.status(404).send("Not found");
    }
    const payload = {
      email,
    };
    const secretKey = "qwer12345";
    const token = jwt.sign(payload, secretKey);

    res.send({
      token,
    });
  } catch (error) {}
});

app.get("/auth/me", authorizationGuard, (req, res) => {
  try {
    const user = req.user

    console.log(user)
    res.send(user)
  } catch (error) {}
});

app.listen(3000, () => {
  console.log("3000");
});
