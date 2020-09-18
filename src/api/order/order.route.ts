import { Router } from "express";
import verifyToken from "../../helpers/verifyToken";
import Controller from "./order.controller";

const order: Router = Router();
const controller = new Controller();

// Retrieve all Users
order.get("/", controller.findAll);

// Add a new Order
order.post("/add",controller.add)

// Retrieve a Specific User
order.get("/:id", verifyToken, controller.findOne);

// Update a User with Id
order.put("/:id", controller.update);

// Delete a User with Id
order.delete("/:id", controller.remove);

export default order;
