import * as tmp from "tmp";
import * as path from "path";
import fs from "fs";

const cloudinary = require("cloudinary").v2

cloudinary.config({
        cloud_name: "morgenshtern",
        api_key: "593714154911242",
        api_secret: "cUWOedCktqJJKViAJAkJPJlX-w0"
    })

// v2.config({
//     cloud_name: "morgenshtern1988",
//     api_key: "593714154911242",
//     api_secret: "cUWOedCktqJJKViAJAkJPJlX-w0"
// })

export const storeImage = async (data: any) => {
  const filePath = path.join(
    tmp.dirSync({ unsafeCleanup: true }).name,
    "test.jpg"
  );

  await new Promise((resolve) => {
    fs.appendFile(filePath, Buffer.from(data), function () {
      resolve(filePath);
    });
  });

  try {
      
      
      const upload = await cloudinary.uploader.upload(filePath)
      
    } catch (error) {
        console.log(error)
    }
  const req = 0;
};
