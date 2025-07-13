import s3 from '../config/s3';
import { db } from '../config/db';
import { v4 as uuidv4 } from 'uuid';
import logger from '../config/logger';

export const uploadImage = async (file: Express.Multer.File): Promise<string> => {
  const key = `products/${uuidv4()}-${file.originalname}`;

  const params = {
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

 try {
    await s3.upload(params).promise();
    const url = `https://${params.Bucket}.s3.amazonaws.com/${key}`;

    logger.info(`Image uploaded successfully: ${url}`);
    return url;
  } catch (error: any) {
    logger.error(`Failed to upload image: ${error.message}`);
    throw error;
  }
};
