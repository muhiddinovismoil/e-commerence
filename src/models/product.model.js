import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    description: {
      type: String,
    },
    category_id: {
      type: mongoose.Schema.ObjectId,
      ref: "category",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("product", ProductSchema);
