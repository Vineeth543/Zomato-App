// Import libraries
import express from "express";

// Import Database Model
import { UserModel } from "../../database/allModels.js";

const Router = express.Router();

/*
Route    /:_id
Des      Get user details
Params   _id
Body     None
Access   Public
Method   GET
*/

Router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const getUser = await UserModel.findById(userId);

    return res.json({ user: getUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /update
Des      Update user details
Params   _id
Body     User data object
Access   Public
Method   PUT
*/

Router.get("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const { userData } = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(
      userId,
      { $set: userData },
      { new: true }
    );

    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
