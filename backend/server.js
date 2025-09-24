
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import lostRoutes from "./routes/lost.js";
import foundRoutes from "./routes/found.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(" MongoDB connection error:", err));

// Routes
app.use("/api/lost", lostRoutes);
app.use("/api/found", foundRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(' Server running on port ${PORT}'));
