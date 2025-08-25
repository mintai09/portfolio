const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
