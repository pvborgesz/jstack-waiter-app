import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategory";
import { listProducts } from "./useCases/products/listProducts";
import { createProduct } from "./useCases/products/createProduct";
import { listProductsByCategory } from "./useCases/categories/listProductsByCategory";
import { listOrders } from "./useCases/orders/listOrders";
import { createOrder } from "./useCases/orders/createOrder";
import { changeOrderStatus } from "./useCases/orders/changeOrderStatus";
import { cancelOrder } from "./useCases/orders/cancelOrder";

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
router.get("/categories/:categoryId/products", listProductsByCategory);

// list orders
router.get("/orders", listOrders);

// create order
router.post("/orders", createOrder);

// change order status
router.patch("/orders/:orderId", changeOrderStatus);

// delete/cancel order
router.delete("/orders/:orderId", cancelOrder);
