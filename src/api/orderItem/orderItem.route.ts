import { Router } from "express";
import order from "../order/order.route";
import Controller from "./orderItem.controller";

const orderItem: Router = Router();
const controller = new Controller();

// Retrieve all Users
orderItem.get("/", controller.findAll);

// Add new Order Item
orderItem.post("add", controller.add);

// Retrieve a Specific User
orderItem.get("/:id", controller.findOne);

// Update a User with Id
orderItem.put("/:id", controller.update);

// Delete a User with Id
orderItem.delete("/:id", controller.remove);

export default orderItem;
