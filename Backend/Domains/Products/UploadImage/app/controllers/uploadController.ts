import { Request, Response } from 'express';
import { uploadImage } from '../services/uploadService';
import logger from '../config/logger';

export const handleUpload = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No image uploaded' });

    const url = await uploadImage(file);
    res.status(200).json({ message: 'Image uploaded successfully', url });
  } catch (error: any) {
    logger.error(`UploadController error: ${error.message}`);
    console.error(error);
    res.status(500).json({ error: 'Upload failed' });
  }
};
