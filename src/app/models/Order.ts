import { model, Schema } from "mongoose";

export const Order = model(
  "Order",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["WAITING", "IN PRODUCTION", "DONE"],
      default: "WAITING",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    product: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  })
);
