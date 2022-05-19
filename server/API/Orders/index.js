// Import libraries
import express from "express";

// Import Database Model
import { OrderModel } from "../../database/allModels.js";

const Router = express.Router();

/*
Route    /
Des      Get all oreders based on id
Params   _id
Ac cess   Public
Method   GET
*/

Router.get("/:_id", async (req, res) => { 
  try {
    const { _id } = req.params;

    const getOrders = await OrderModel.findOne({ user: _id });

    if (!getOrders) return res.status(404).json({ error: "User not found." });

    return res.status(200).json({ orders: getOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /new
Des      Add new order 
Params   _id
Access   Public
Method   GET
*/

Router.get("/new/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const { oredrDetails } = req.body;

    const addNewOrder = await OrderModel.findOneAndUpdate(
      { user: _id },
      { $push: { oredrDetails } },
      { new: true }
    );

    return res.status(200).json({ orders: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
