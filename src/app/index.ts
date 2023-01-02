import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("🚀 Connected to database");

    const port = 4000;

    app.listen(port, () => {
      console.log(`🚀 Server is running on: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("❌ Error connecting to database", err);
  });
