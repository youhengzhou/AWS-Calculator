const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/calculate", async (req, res) => {
  const { a, b, op } = req.body;
  try {
    const response = await axios.post(
      "https://0skc1m4voi.execute-api.us-east-1.amazonaws.com/dev",
      { a, b, op }
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => console.log("Server running on localhost:3000"));
