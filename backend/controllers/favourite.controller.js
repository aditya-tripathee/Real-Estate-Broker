import Favourite from "../models/favourite.model.js";
import Property from "../models/property.model.js";

export const addFavourite = async (req, res) => {
  try {
    // const userId = req.user._id;
    // console.log(userId);
    console.log(req.user.role);

    if (req.user.role != "Buyer") {
      return res.status(400).json({ message: "Only buyers can add favouites" });
    }

    //  take property id
    const { id } = req.params;
    console.log(id);

    // check exists
    const property = await Property.findById(id);
    if (!property) {
      return res.status(400).json({ message: "Property not found!" });
    }
    // check already favourite or not
    const alreadyFavouite = await Favourite.findOne({
      userId: req.user._id,
      propertyId: id,
    });
    if (alreadyFavouite) {
      return res.status(400).json({ message: "Already in favourites" });
    }

    const newFavourite = await Favourite.create({
      userId: req.user._id,
      propertyId: id,
    });
    return res
      .status(201)
      .json({ message: "Property added in favouites", newFavourite });
  } catch (error) {
    console.error("Add to favouites error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const getFavourites = async(req,res)=>{
  try {
    const favourites = await Favourite.find({ userId: req.user._id }).populate("propertyId");
    if(!favourites){
      return res.status(400).json({message:"No favourites found!"});
    }
    return res.status(200).json({ message: "Favourites retrieved successfully", favourites });

  } catch (error) {
    console.error("Get favouites error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export const removeFavourite = async(req,res)=>{
      try {
        const { id } = req.params;
        if(!id){
          return res.status(400).json({message:"Property id is required!"});
        }
        const deletedFavourite = await Favourite.findOneAndDelete({
          userId: req.user._id,
          propertyId: id
        });
        if(!deletedFavourite){
          return res.status(400).json({message:"Favourite not found!"});
        }
        return res.status(200).json({ message: "Favourite removed successfully" });

      } catch (error) {
        console.error("Remove favouites error", error);
        return res.status(500).json({ message: "Internal server error" });          
      }
}
