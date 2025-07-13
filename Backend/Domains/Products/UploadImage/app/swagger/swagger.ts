import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'UploadImage API',
      version: '1.0.0',
      description: 'API for uploading images to AWS S3 and returning a public URL',
    },
    servers: [
      {
        url: 'http://localhost:3008',
        description: 'Local development server',
      },
      {
        url: 'http://52.54.233.190:3008',
        description: 'AWS development server',
      },
    ],
    paths: {},
  },
  apis: ['./app/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec, swaggerUi };
