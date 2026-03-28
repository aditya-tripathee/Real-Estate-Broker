import mongoose, { mongo } from "mongoose";



const favSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    propertyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Property",
        required:true,  
    }
},{
    timestamps:true,
});



const Favourite = mongoose.model("Favourite", favSchema);
export default Favourite;


