import express, { Request } from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

app.post("/", (req: Request<RequestBody>, res) => {
  console.log(req.body);
  res.json({ message: `Thank you for your interest, ${req.body.name}` });
});

app.listen(port, () => {
  console.log(`The server is running at http://locahost:${port}`);
});
