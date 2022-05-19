// Import libraries
import express from "express";

// Import Database Model
import { ReviewModel } from "../../database/allModels.js";

const Router = express.Router();

/*
Route    /new
Des      Add new food review or rating
Params   None
Body     Review object
Access   Public
Method   GET
*/

Router.get("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;

    await ReviewModel.create({ reviewData });

    return res.json({ review: "Review added successfully." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /delete
Des      Delete food review or rating
Params   _id
Body     None
Access   Public
Method   DELETE
*/

Router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await ReviewModel.findOneAndDelete({ _id });

    return res.json({ review: "Review deleted successfully." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
