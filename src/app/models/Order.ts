import { model, Schema } from "mongoose";

export const Order = model(
  "Order",
  new Schema({
    name: {
      type: String,
      required: false,
    },
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["WAITING", "IN_PRODUCTION", "DONE"],
      default: "WAITING",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    products: {
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
