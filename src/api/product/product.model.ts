import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    isDiscontinued: {
      type: Boolean,
      required: true,
    },
    Supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
    },
  },
  {
    timestamps: true,
    useNestedStrict: true,
  }
);

export default mongoose.model("Product", ProductSchema);
