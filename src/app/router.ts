import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategory";
import { listProducts } from "./useCases/products/listProducts";
import { createProduct } from "./useCases/products/createProduct";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List Categories
router.get("/categories", listCategories);

// create categories
router.post("/categories", createCategory);

// list products
router.get("/products", listProducts);

// create products
router.post("/products", upload.single("image"), createProduct);

// get product by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK!");
});

// list orders
router.get("/orders", (req, res) => {
  res.send("OK!");
});

// create order
router.post("/orders", (req, res) => {
  res.send("OK!");
});

// change order status
router.patch("/orders/:orderId", (req, res) => {
  // put != patch, put is for replace, patch is for update
  res.send("OK!");
});

// delete/cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("OK!");
});
