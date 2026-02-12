import express from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500/Node_Express"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello from express");
});
app.get("/message", (req, res) => {
  res.json({ message: "Hello from express backend" });
});

app.listen(3000, () => {
  console.log("Server Is istening to port 300");
});
