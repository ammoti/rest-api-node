import { Router } from "express";
import Controller from "./product.controller";

const product: Router = Router();
const controller = new Controller();

// Retrieve all products
product.get("/", controller.findAll);

// Add new product
product.post("/add", controller.add);

// Retrieve a Specific product
product.get("/:id", controller.findOne);

// Update a product with Id
product.put("/:id", controller.update);

// Delete a product with Id
product.delete("/:id", controller.remove);

export default product;
