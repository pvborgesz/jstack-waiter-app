import { Router } from "express";

export const router = Router();

// List Categories
router.get("categories", (req, res) => {
  res.send("OK!");
});

// create categories
router.post("categories", (req, res) => {
  res.send("OK!");
});

// list products
router.get("products", (req, res) => {
  res.send("OK!");
});

// create products
router.post("products", (req, res) => {
  res.send("OK!");
});

// get product by category
router.get("categories/:categoryId/products", (req, res) => {
  res.send("OK!");
});

// list orders
router.get("orders", (req, res) => {
  res.send("OK!");
});

// create order
router.post("orders", (req, res) => {
  res.send("OK!");
});

// change order status
router.patch("orders/:orderId", (req, res) => {
  // put != patch, put is for replace, patch is for update
  res.send("OK!");
});

// delete/cancel order
router.delete("orders/:orderId", (req, res) => {
  res.send("OK!");
});
