import express from "express";

const app = express();
const PORT = process.env.PORT || 4444;
app.get("/", (req, res) => {
  res.send("Salam brat");
});
app.post("/auth/login", (req, res) => {
  res.json({
    success: true,
  });
});
app.listen(PORT, (err) => {
  if (err) {
    return console.log("ERROR");
  }
  console.log("Server started");
});
