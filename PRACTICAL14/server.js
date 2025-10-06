// server.js
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where resumes will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter (only PDFs allowed)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

// Max file size = 2MB
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
  fileFilter,
});

// Upload route
app.post("/upload", upload.single("resume"), (req, res) => {
  res.send("Resume uploaded successfully!");
});

// Error handling middleware (for multer)
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).send("File too large. Max size is 2MB.");
    }
    return res.status(400).send(err.message);
  } else if (err) {
    return res.status(400).send(err.message);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
