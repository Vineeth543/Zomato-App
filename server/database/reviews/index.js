import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    restaurent: { type: mongoose.Types.ObjectId, ref: "Restaurents" },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    isRestaurantReview: Boolean,
    isFoodReview: Boolean,
    photos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Images",
      },
    ],
  },
  { timestamp: true }
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);
