
export const isSeller = async(req,res,next)=>{
    if(req.user.role!=="Seller"){
        return res.status(403).jsn({message:"Forbidden, only seller can create property!"})
    };
    next();
}


