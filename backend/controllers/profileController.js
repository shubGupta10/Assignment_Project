import { uploadOnCloudinary } from "../utils/cloudinary.js";


export const uploadProfilePicture = async (req,res)=> {
    try {
        if(!req.file){
            return res.status(400).json({ error: "No file uploaded!" });
        }
        const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
        if(!cloudinaryResponse){
            return res.status(500).json({ error: "Failed to upload file to Cloudinary." });
        }
        res.status(200).json({imageUrl: cloudinaryResponse.url});
    } catch (error) {
        console.error("Error in uploading the profile picture.", error.message);
        res.status(500).json({error: "Failed to upload profile picture!"})
    }
}