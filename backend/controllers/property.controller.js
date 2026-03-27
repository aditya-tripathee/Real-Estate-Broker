import Property from "../models/property.model.js";

export const createProperty = async (req, res) => {
  try {
    const { title, description, price, location, propertyType, createdBy } =
      req.body;
    if (
      !title ||
      !description ||
      !price ||
      !location ||
      !createdBy ||
      !propertyType
    ) {
      return res.status(400).json({ messsage: "Missing fields required!" });
    }
    const images =
      req.files && req.files.length > 0
        ? req.files.map((file) => file.path)
        : [];

    const property = await Property.create({
      title,
      description,
      price,
      location,
      createdBy,
      images,
      propertyType,
      
    });

    return res
      .status(201)
      .json({ message: "Property created successfully!", property });
  } catch (error) {
    console.error("Property register error ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find({}).sort({ postAt: -1 });
    if (!properties.length === 0) {
      return res.status(404).json({ message: "No properties found" });
    }

    return res
      .status(200)
      .json({ message: "All properties found!", properties });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;

    const property = await Property.findById(id).populate({ createdBy, name });
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).josn({ property });
  } catch (error) {
    console.error("Get property by id error ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findByIdAndDelete(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    return res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("Deleted property error", error);
    return res.status(500).json({ messsage: "Internal server error" });
  }
};


