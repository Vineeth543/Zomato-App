// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

// Models
import { UserModel } from "../../database/user/index.js";
import { authenticate } from "passport/lib";

const Router = express.Router();

/*
Route    /signup
Des      Signup with email and password
Params   None
Access   Public
Method   Post
*/

Router.post("/signup", async (req, res) => {
  try {
    // check whether email & phone number exist
    await UserModel.findByEmailAndPhone(req.body.credentials);

    // save to database
    const newUser = await UserModel.create(req.body.credentials);

    // generate JWT auth tokens
    const token = newUser.generateJwtTokens();

    // return
    return res.status(200).json({ token, status: "Success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /signin
Des      Signin with email and password
Params   None
Access   Public
Method   Post
*/

Router.post("/signin", async (req, res) => {
  try {
    // check whether email & phone number exist
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);

    // generate JWT auth tokens
    const token = user.generateJwtTokens();

    // return
    return res.status(200).json({ token, status: "Success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /google
Des      Google Signin
Params   None
Access   Public
Method   GET
*/

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
Route    /google/callback
Des      Google Signin callback
Params   None
Access   Public
Method   GET
*/

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);

export default Router;
