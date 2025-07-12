# 📄 CreateProduct Microservice

This microservice is part of the **GreenCommerce** ecosystem, a distributed e-commerce platform for selling lightweight construction materials. The purpose of `CreateProduct` is to expose a GraphQL mutation that allows inserting new product records into a **MySQL database hosted on AWS RDS**.

---

## ⚙️ Functionality

The `CreateProduct` microservice exposes a `createProduct` GraphQL mutation that receives structured input with product information. The data is validated and stored in a MySQL table (`products`) on RDS.

This service includes centralized logging using Winston and is ready for containerized deployment using Docker.

---

### 🚀 Technologies Used

- 🟨 Node.js + TypeScript
- 🚀 GraphQL (Yoga + TypeGraphQL)
- 🐬 MySQL (AWS RDS)
- 🐳 Docker
- 📦 dotenv
- 📝 Winston logger

---

## 🛠️ Software Architecture

This microservice implements a **GraphQL-based architecture** and applies the **SOLID principles** within a clean layered structure:

- GraphQL exposes a `Mutation` to create a new product.
- Code is organized into layers:
  - **Controller** – Resolver (GraphQL endpoint)
  - **Service** – Business logic
  - **Repository** – Database access layer
  - **DTO** – Input validation and documentation
  - **Config** – Database connection, logger
- Uses **Single Responsibility**, **Separation of Concerns**, and centralized logging with Winston.

---

## 📂 Folder Structure

```
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
    └── tsconfig.json
```

---

## 📐 Design Pattern – SOLID

This microservice applies **SOLID principles**:

- **S**: Every class/module has one clear responsibility.
- **O**: New features (e.g., validation, logging) can be added without modifying the core flow.
- **L**: GraphQL `@InputType` and `@Mutation` ensure contract-based behavior.
- **I**: Only the required product fields are passed.
- **D**: Business logic is decoupled from database implementation.

---

## 🔒 Environment Variables

A `.env` file is used to configure the connection to the MySQL RDS instance:

```bash
DB_HOST = ...
DB_PORT = 3306
DB_NAME = greencommerce_users_db
DB_USER = ...
DB_PASSWORD = ...
JWT_SECRET = ...
```

---

## 📑 GraphQL Schema

The schema exposes the following mutation:

```bash
mutation createProduct(data: ProductInput): String
```


```bash
input ProductInput {
  name: String!
  description: String!
  price: Float!
  stock: Int!
  brand: String!
  category: String!
  image_url: String!
}
```

---

## 🧪 Test Query (Example)


```bash
mutation {
  createProduct(data: {
    name: "Cordless Drill",
    description: "20V Rechargeable Drill with Case",
    price: 149.99,
    stock: 25,
    brand: "DeWalt",
    category: "Tools",
    image_url: "https://example.com/taladro.jpg"
  })
}
```

### Expected Response:

```json
{
  "data": {
    "createProduct": "Product successfully created"
  }
}
```

---

## 🐳 Docker Deployment
### 🧾 Prerequisites

- Docker installed
- .env file correctly configured with your RDS credentials

#### Build the Docker image

```bash
docker build -t your_user/create-product-service:lastest .
```

#### Run the container

```bash
docker run -d --env-file .env -p 3000:3000 --name create-product your_user/create-product-service:lastest
```


#### 🌐 Visit GraphQL endpoint

```bash
http://localhost:3000/graphql
```

#### Stop the container

```bash
docker stop your_user/create-product-service
```

#### Delete the stopped container

```bash
docker rm your_user/create-product-service
```

#### Delete the image

```bash
docker rmi your_user/update-user-service:lastest
```

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara
