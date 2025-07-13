# 🛍️ Products Domain

This domain handles all product-related operations in the **GreenCommerce** distributed e-commerce platform. It consists of two independent backend microservices implemented in **TypeScript**, supporting both image upload to AWS S3 and product creation via GraphQL.

---

## ⚙️ Technologies

- 🟨 Node.js + TypeScript
- 🚀 GraphQL (for CreateProduct)
- ☁️ AWS S3 (for UploadImage)
- 🐬 MySQL (AWS RDS)
- 🐳 Docker
- 📦 dotenv
- 📘 Swagger (for UploadImage)

---

## 📁 Project Structure

```
└── 📁Products
    └── 📁CreateProduct
        └── 📁src
            └── 📁config
                ├── database.ts
                ├── logger.ts
            └── 📁graphql
                ├── schema.ts
            └── 📁modules
                └── 📁product
                    └── 📁controller
                        ├── createProduct.controller.ts
                    └── 📁dto
                        ├── product.input.ts
                    └── 📁repository
                        ├── product.repository.ts
                    └── 📁service
                        ├── createProduct.service.ts
            ├── app.ts
        ├── .dockerignore
        ├── .env
        ├── .gitignore
        ├── Dockerfile
        ├── package-lock.json
        ├── package.json
        ├── README.md
        ├── tsconfig.json
    └── 📁UploadImage
        └── 📁app
            └── 📁config
                ├── db.ts
                ├── logger.ts
                ├── s3.ts
            └── 📁controllers
                ├── uploadController.ts
            └── 📁routes
                ├── uploadRoute.ts
            └── 📁services
                ├── uploadService.ts
            └── 📁swagger
                ├── swagger.ts
        ├── .env
        ├── app.ts
        ├── Dockerfile
        ├── package-lock.json
        ├── package.json
        ├── README.md
        ├── swagger-jsdoc.d.ts
        ├── tsconfig.json
    ├── greencommerce_products_db.sql
    └── README.md
```

---

## 📦 Microservices

| **Microservice** |                              **Description**                              | **Programming Language** | **Sofware Architecture** | **Design Pattern** |
|:----------------:|:-------------------------------------------------------------------------:|:------------------------:|--------------------------|:------------------:|
|   CreateProduct  | Receives product data and persists it in a MySQL database via GraphQL API |   TypeScript (Node.js)   |       GraphQL-based      |       📐SOLID       |
|    UploadImage   |         Uploads product images to AWS S3 and returns a public URL         |   TypeScript (Node.js)   | Layered Architecture     |       💋 KISS       |

---

## 📘 Swagger Documentation

Only the UploadImage service includes Swagger for testing:

- UploadImage Swagger: http://localhost:3008/docs
- If deployed on AWS: http://<EC2_PUBLIC_IP>:3008/docs

Use the "Try it out" button to upload an image file and get the public URL in response.

---

## 🐳 Run with Docker

1. Clean up old containers and images (optional)

```bash
docker ps -a
docker rm <container_id>
docker images
docker rmi <image_id>
```

### 2. Build and Run UploadImage Service:

```bash
docker build -t your_user/upload-image-service:latest
docker run --env-file .env -p 3008:3008 your_user/upload-image-service:latest
```

Upload Endpoint
- POST http://localhost:3008/product/upload
- Uploads an image and returns a public URL from your S3 bucket.

### 3. Build and Run CreateProduct Service:
```bash
docker build -t your_user/create-product-service:latest 
docker run --env-file .env -p 3000:3000 your_user/create-product-service:latest
```

GraphQL Endpoint
- http://localhost:3000/graphql

### Sample Mutation

```json
mutation {
  createProduct(data: {
    name: "Eco Brick",
    description: "Sustainable recycled brick",
    price: 12.99,
    stock: 100,
    brand: "EcoLine",
    category: "Masonry",
    image_url: "https://greencommerce-product-images.s3.amazonaws.com/products/brick.jpg"
  })
}
```

### Response

```json
{
  "data": {
    "createProduct": "Product successfully created"
  }
}
```

---

## 🔐 Environment Variables (.env)

Both microservices require environment configuration. Example:

```bash
# Shared
AWS_REGION=us-east-1
S3_BUCKET_NAME=greencommerce-product-images

# UploadImage only
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_SESSION_TOKEN=...
PORT=3008

# CreateProduct only
DB_HOST=...
DB_PORT=3306
DB_NAME=greencommerce_products_db
DB_USER=...
DB_PASSWORD=...
PORT=3000
```

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara