import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, price, description, category, ingredients } = req.body;
    await Product.create({
      name,
      description,
      price: Number(price),
      category: category,
      ingredients: JSON.parse(ingredients),
      imagePath: imagePath,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
