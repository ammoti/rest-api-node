import { Request, Response } from "express";
import Supplier from "./supplier.model";

export default class SupplierController {
  public add = async (req: Request, res: Response): Promise<any> => {
    const { companyName, contactName, contactTitle, phone  } = req.body;
    try {

      const supplier = new Supplier({
        companyName, contactName, contactTitle, phone 
      });

      const newSupplier = await supplier.save();

      res.status(201).send({
        success: true,
        message: "Supplier Successfully created",
        data: newSupplier,
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
      const suppliers = await Supplier.find();
      if (!suppliers) {
        return res.status(404).send({
          success: false,
          message: "products not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: suppliers,
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
      const suppliers = await Supplier.findById(req.params.id);
      if (!suppliers) {
        return res.status(404).send({
          success: false,
          message: "product not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: suppliers,
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
    const { companyName, contactName, contactTitle, phone } = req.body;
    try {
      const supplierUpdated = await Supplier.findByIdAndUpdate(
        req.params.id,
        {
          $set: { companyName, contactName, contactTitle, phone },
        },
        { new: true }
      );
      if (!supplierUpdated) {
        return res.status(404).send({
          success: false,
          message: "product not found",
          data: null,
        });
      }
      res.status(200).send({
        success: true,
        data: supplierUpdated,
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
      const suppliers = await Supplier.findByIdAndRemove(req.params.id);

      if (!suppliers) {
        return res.status(404).send({
          success: false,
          message: "supplier not found",
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
