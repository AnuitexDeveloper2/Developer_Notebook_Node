import multer from "multer";
import logger from "../Logging";

const options = {
    limits: {
      fileSize: parseInt("5242880", 10),
    },
    storage: multer.memoryStorage()
  };
  const mupload = multer(options).any();
  
  // Extracts file objects from multipart requests.
  export const parse = (req, res, next) => {
    mupload(req, res, (error) => {
      if (error) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            logger.error("Too large file")
          next();
        } else {
          next(error);
        }
      } else {
        next();
      }
    });
  };