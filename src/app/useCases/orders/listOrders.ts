import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) // 1 para crescente, -1 decrescente
      .populate("products.product");
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
