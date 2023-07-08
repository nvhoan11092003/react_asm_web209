import express from "express";
// const express = require("express");
const app = express();

// Xử lý các yêu cầu từ client tại đây
const port = 8080;

app.get("/api/data", (req, res) => {
  // Xử lý yêu cầu API ở đây
  res.json({ message: "Hello from API!" });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
  console.log("db connected");
});
