import mongoose, { Types } from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    propertyType: {
      type: String,
      enum: [
        "Apartment",
        "Villa",
        "Penthouse",
        "Townhouse",
        "Commercial",
        "Land",
      ],
      required:true
    },
    status: {
      type: String,
      enum: ["Sold", "Available"],
      default: "Available",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postAt: {
      type: Date,
      default: () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); 
        return today;
      },
      required: true,
    },
  },
  { timestamps: true },
);

const Property = mongoose.model("Property", propertySchema);
export default Property;




