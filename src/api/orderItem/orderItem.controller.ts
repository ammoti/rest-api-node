import { Request, Response } from "express";
import OrderItem from "./orderItem.model";

export default class OrderController {
  public add = async (req: Request, res: Response): Promise<any> => {
    const { unitPrice, quantitiy, orderid, productid } = req.body;
    try {
      const order = new OrderItem({
        unitPrice,
        quantitiy,
        orderid,
        productid,
      });

      const newOrder = await order.save();

      res.status(201).send({
        success: true,
        message: "Order Successfully created",
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
      const orderItems = await OrderItem.find();
      if (!orderItems) {
        return res.status(404).send({
          success: false,
          message: "Orders not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: orderItems,
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
      const orderItem = await OrderItem.findById(req.params.id, {
        password: 0,
      });
      if (!orderItem) {
        return res.status(404).send({
          success: false,
          message: "Order Item not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: orderItem,
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
    const { unitPrice, quantitiy } = req.body;
    try {
      const orderItemUpdated = await OrderItem.findByIdAndUpdate(
        req.params.id,
        {
          $set: { unitPrice, quantitiy },
        },
        { new: true }
      );
      if (!orderItemUpdated) {
        return res.status(404).send({
          success: false,
          message: "Order Item not found",
          data: null,
        });
      }
      res.status(200).send({
        success: true,
        data: orderItemUpdated,
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
      const orderItem = await OrderItem.findByIdAndRemove(req.params.id);

      if (!orderItem) {
        return res.status(404).send({
          success: false,
          message: "Order Item not found",
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
