import express from "express";
import FoundItem from "../models/FoundItem.js";

const router = express.Router();

// Post found item
router.post("/", async (req, res) => {
  try {
    const found = new FoundItem(req.body);
    await found.save();
    res.json(found);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all found items
router.get("/", async (req, res) => {
  try {
    const foundItems = await FoundItem.find().sort({ date: -1 });
    res.json(foundItems);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
