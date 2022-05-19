// Import libraries
import express from "express";
import passport from "passport";

// Import Database Model
import { FoodModel } from "../../database/allModels.js";

const Router = express.Router();

/*
Route    /
Des      Get all restaurant details based on perticular restaurant
Params   id
Access   Public
Method   GET
*/

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const foods = await FoodModel.find({ restuarants: _id });

    if (!foods) return res.status(404).json({ error: "Not Found BVC." });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /
Des      Get all restaurant details based on perticular category
Params   id
Access   Public
Method   GET
*/

Router.get("/r/:category", async (req, res) => {
  try {
    const { category } = req.params;

    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!foods) return res.status(404).json({ error: "Not Found BVC." });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
