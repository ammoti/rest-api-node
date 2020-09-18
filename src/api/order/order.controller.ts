import { Request, Response } from "express";
import Order from "./order.model";

export default class OrderController {
  public add = async (req: Request, res: Response): Promise<any> => {
    const { orderDate, orderNumber, totalAmount,user } = req.body;
    try {

      const order = new Order({
        orderDate, orderNumber, totalAmount,user
      });

      const newOrder = await order.save();

      res.status(201).send({
        success: true,
        message: "User Successfully created",
        data: newOrder,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
      });
    }
  };

  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      const orders = await Order.find();
      if (!orders) {
        return res.status(404).send({
          success: false,
          message: "Orders not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: orders,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null,
      });
    }
  };

  public findOne = async (req: Request, res: Response): Promise<any> => {
    try {
      const order = await Order.findById(req.params.id, { password: 0 });
      if (!order) {
        return res.status(404).send({
          success: false,
          message: "Order not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: order,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null,
      });
    }
  };

  public update = async (req: Request, res: Response): Promise<any> => {
    const { orderDate, orderNumber, totalAmount } = req.body;
    try {
      const orderUpdated = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            orderDate,
            orderNumber,
            totalAmount,
          },
        },
        { new: true }
      );
      if (!orderUpdated) {
        return res.status(404).send({
          success: false,
          message: "Order not found",
          data: null,
        });
      }
      res.status(200).send({
        success: true,
        data: orderUpdated,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null,
      });
    }
  };

  public remove = async (req: Request, res: Response): Promise<any> => {
    try {
      const order = await Order.findByIdAndRemove(req.params.id);

      if (!order) {
        return res.status(404).send({
          success: false,
          message: "Order not found",
          data: null,
        });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null,
      });
    }
  };
}
