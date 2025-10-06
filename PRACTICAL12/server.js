const express = require("express");
const path = require("path");

const app = express();
const port = 5500;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS) from public folder
app.use(express.static(path.join(__dirname, "public")));

// API route for calculations
app.post("/calculate", (req, res) => {
  const { a, b, op } = req.body;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (!isFinite(numA) || !isFinite(numB)) {
    return res.status(400).json({ error: "Please enter valid numbers." });
  }

  let result;
  switch (op) {
    case "add":
      result = numA + numB;
      break;
    case "subtract":
      result = numA - numB;
      break;
    case "multiply":
      result = numA * numB;
      break;
    case "divide":
      if (numB === 0) return res.status(400).json({ error: "Cannot divide by zero!" });
      result = numA / numB;
      break;
    default:
      return res.status(400).json({ error: "Invalid operation." });
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Calculator running at http://localhost:${port}`);
});
