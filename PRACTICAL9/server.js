const express = require("express");
const homeRoute = require("./home");

const app = express();
const PORT = process.env.PORT || 3300;

// Home route
app.get("/", homeRoute);

// Start server
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
