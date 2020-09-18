import { Router } from "express";
import Controller from "./supplier.controller";

const supplier: Router = Router();
const controller = new Controller();

// Retrieve all suppliers
supplier.get("/", controller.findAll);

// Add a new supplier
supplier.post("/add",controller.add);

// Retrieve a Specific supplier
supplier.get("/:id", controller.findOne);

// Update a supplier with Id
supplier.put("/:id", controller.update);

// Delete a supplier with Id
supplier.delete("/:id", controller.remove);

export default supplier;
