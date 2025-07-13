import { Router } from 'express';
import multer from 'multer';
import { handleUpload } from '../controllers/uploadController';

const router = Router();
const upload = multer();

/**
 * @swagger
 * /product/upload:
 *   post:
 *     summary: Upload an image to AWS S3
 *     tags:
 *       - Upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 */

router.post('/upload', upload.single('image'), handleUpload);

export default router;
