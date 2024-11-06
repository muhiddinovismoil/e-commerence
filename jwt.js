import jwt from "jsonwebtoken";

const payload = {
  id: 12345678,
  username: "xamidullo",
  email: "test@test.com",
};

const secretKey = "qwer12345";
const token = jwt.sign(payload, secretKey);

jwt.verify(token, "qwer1234", function (err, decoded) {
  if (err) {
      console.error(err);
  }
  console.log(decoded); // bar
});
