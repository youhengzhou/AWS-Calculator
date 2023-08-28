const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

app.use(cors());

app.post("/calculate", async (req, res) => {
  const { a, b, op } = req.body;
  const response = await fetch(
    "https://0skc1m4voi.execute-api.us-east-1.amazonaws.com/dev",
    {
      method: "POST",
      body: JSON.stringify({ a, b, op }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Proxy server running on localhost:3000"));
