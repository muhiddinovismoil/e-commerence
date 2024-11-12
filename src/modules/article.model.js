import { Schema, model } from "mongoose";

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    content: String,
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Article = model("Article", articleSchema);
