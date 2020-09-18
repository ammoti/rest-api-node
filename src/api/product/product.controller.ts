import { Request, Response } from 'express';
import Product from './product.model';

export default class ProductController {
  public add = async (req: Request, res: Response): Promise<any> => {
    const { productName,imageUrl,unitPrice,packageName,isDiscontinued,Supplier } = req.body;
    try {

      const product = new Product({
        productName,imageUrl,unitPrice,packageName,isDiscontinued,Supplier
      });

      const newProduct = await product.save();

      res.status(201).send({
        success: true,
        message: "Product Successfully created",
        data: newProduct,
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
      const products = await Product.find();
      if (!products) {
        return res.status(404).send({
          success: false,
          message: 'products not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: products
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public findOne = async (req: Request, res: Response): Promise<any> => {
    try {
      const products = await Product.findById(req.params.id);
      if (!products) {
        return res.status(404).send({
          success: false,
          message: 'product not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: products
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public update = async (req: Request, res: Response): Promise<any> => {
    const { productName,imageUrl,unitPrice,packageName,isDiscontinued,supplierId } = req.body;
    try {
      const productUpdated = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            productName,imageUrl,unitPrice,packageName,isDiscontinued,supplierId
          }
        },
        { new: true }
      );
      if (!productUpdated) {
        return res.status(404).send({
          success: false,
          message: 'product not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: productUpdated
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public remove = async (req: Request, res: Response): Promise<any> => {
    try {
      const products = await Product.findByIdAndRemove(req.params.id);

      if (!products) {
        return res.status(404).send({
          success: false,
          message: 'product not found',
          data: null
        });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}
