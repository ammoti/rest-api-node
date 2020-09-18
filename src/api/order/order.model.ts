import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrderSchema = Schema(
  {
    orderDate: {
      type: Date,
      required: true,
    },
    orderNumber: {
      type: String,
      required: false,
    },
    totalAmount: {
      type: Number,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    useNestedStrict: true,
  }
);

export default mongoose.model("Order", OrderSchema);
