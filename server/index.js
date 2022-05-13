// Importing env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors"; // makes url as origin
import helmet from "helmet"; //security library
import passport from "passport";

// import config
import googleAuthConfig from "./config/google.config";

// microservices route
import Auth from "./API/Auth/index.js";
import Restaurant from "./API/Restaurant/index.js";

// database connection
import ConnectDB from "./database/connection.js";

const zomato = express();

//Application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

// passport configeration
googleAuthConfig(passport);

// application route
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);

zomato.get("/", (req, res) => res.json({ message: "Setup Success" }));

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running.🚀"))
    .catch(() =>
      console.log("Server is running, but database connection failed.❌")
    )
);
