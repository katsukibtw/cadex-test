import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: `Thank you for your interest` });
});

app.listen(port, () => {
  console.log(`The server is running at http://locahost:${port}`);
});
