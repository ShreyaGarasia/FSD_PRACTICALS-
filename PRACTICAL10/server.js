const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Path to the log file
const logFilePath = path.join(__dirname, "error.log");

// Root route: show log or message
app.get("/", (req, res) => {
fs.readFile(logFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading log file:", err.message);
    if (err.code === "ENOENT") {
        return res.type("text/plain").status(404).send("Error log file not found.");
    }
    return res.type("text/plain").status(500).send("Unable to read log file.");
    }

    if (!data.trim()) {
    return res.type("text/plain").send("Log file is empty.");
    }

    res.type("text/plain").send(data);
});
});

app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});

