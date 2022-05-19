// Import libraries
import express from "express";
import passport from "passport";

// Import Database Model
import { MenuModel, ImageModel } from "../../database/allModels.js";

const Router = express.Router();

/*
Route    /list
Des      Get all menu lists based on id
Params   _id
Access   Public
Method   GET
*/

Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findOne(_id);
    if (!menus) return res.status(404).json({ error: "Not Found BVC." });
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /image
Des      Get all menu images based on id
Params   _id
Access   Public
Method   GET
*/

Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await ImageModel.findOne(_id);
    if (!menus) return res.status(404).json({ error: "Not Found BVC." });
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
