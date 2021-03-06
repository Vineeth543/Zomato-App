// Import libraries
import express from "express";
import passport from "passport";

// Import Database Model
import { RestaurantModel } from "../../database/allModels.js";

// validation
import {
  validateRestaurantCity,
  validateRestaurantSearchString,
} from "../../validation/restaurant.js";
import { validateRestaurantId } from "../../validation/food.js";

const Router = express.Router();

/*
Route    /
Des      Get all restaurant details based on city name
Params   None
Access   Public
Method   GET
*/

Router.get("/", async (req, res) => {
  try {
    await validateRestaurantCity(req.query);

    const { city } = req.query;

    const restaurants = await RestaurantModel.find({ city });

    if (!restaurants)
      return res.status(404).json({ error: "Restaurant Not Found." });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /
Des      Get all restaurant details based on id
Params   None
Access   Public
Method   GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    await validateRestaurantId(req.params);

    const { _id } = req.params;

    const restaurant = await RestaurantModel.findOne({ _id });

    if (!restaurant)
      return res.status(404).json({ error: "Restaurant Not Found." });

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /
Des      Get all restaurant details based on search string
Params   None
Body     searchString
Access   Public
Method   GET
*/

Router.get("/search", async (req, res) => {
  try {
    await validateRestaurantSearchString(req.body);

    const { searchString } = req.body;

    const restaurant = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (!restaurant)
      return res
        .status(404)
        .json({ error: `No Restaurant matched with ${searchString}` });

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
