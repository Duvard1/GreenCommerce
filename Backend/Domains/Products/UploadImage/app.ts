import express from 'express';
import dotenv from 'dotenv';
import uploadRoute from './app/routes/uploadRoute';
import cors from 'cors';
import { swaggerSpec, swaggerUi } from './app/swagger/swagger';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/product', uploadRoute);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`UploadImage service running on port ${PORT}`);
});
