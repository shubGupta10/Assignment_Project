import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import { config as dotenvConfig } from 'dotenv';


dotenvConfig();

//This is configuration of cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath){ 
        throw new Error('File is missing.');
        }
          const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        console.log("file is uploaded successfully", response.url);
        return response;
    } catch (error) {
        //this will remove the file that stored on server temperorily.
        console.error("Error uploading file to Cloudinary:", error);
        fs.unlinkSync(localFilePath);
        return null;
    }
}


export {uploadOnCloudinary};