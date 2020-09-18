import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const SupplierSchema = Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    contactName: {
      type: String,
      required: true,
    },
    contactTitle: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    useNestedStrict: true,
  }
);

export default mongoose.model("Supplier", SupplierSchema);
