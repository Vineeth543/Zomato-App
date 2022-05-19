// Import libraries
import express from "express";
import multer from "multer";

// Import Database Model
import { ImageModel } from "../../database/allModels.js";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3.js";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route    /
Des      Upload given image to S3 bucket and saves file link to mongoDB
Params   id
Access   Public
Method   POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(404).json({ error: "Image Not Found." });

    //   S3 Bucket options
    const bucketOptions = {
      Bucket: "zomato-clone-vineeth",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    if (!uploadImage)
      return res.status(404).json({ error: "Image upload failed." });

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
