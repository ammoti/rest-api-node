import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrderItemSchema = Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    orderid:{
      type: Schema.Types.ObjectId,
      ref: "Order"
    },
    productid:{
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  },
  {
    timestamps: true,
    useNestedStrict: true,
  }
);

export default mongoose.model("OrderItem", OrderItemSchema);
