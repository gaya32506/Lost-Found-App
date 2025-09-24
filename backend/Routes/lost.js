
import express from "express";
import LostItem from "../models/LostItem.js";
import FoundItem from "../models/FoundItem.js";
const router = express.Router();

// Post lost item
router.post("/", async (req, res) => {
  try {
    const lost = new LostItem(req.body);
    await lost.save();

    const matches = await FoundItem.find({
      title: { $regex: lost.title, $options: "i" },
      location: { $regex: lost.location, $options: "i" }
    });

    res.json({ lost, matches });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all lost items
router.get("/", async (req, res) => {
  try {
    const lostItems = await LostItem.find().sort({ date: -1 });
    res.json(lostItems);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
