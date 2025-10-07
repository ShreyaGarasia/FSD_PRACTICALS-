const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "src"))); // put all HTML/CSS/JS in /public

// Default route
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "src", "Auth.html"));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
