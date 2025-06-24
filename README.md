# 🌱 GreenCommerce

GreenCommerce is a distributed e-commerce platform designed to promote and sell sustainable products made from recycled materials. The platform is built with scalability, resilience, and eco-conscious performance in mind, leveraging modern technologies like JWT-based authentication, a product catalog, and a shopping cart. The system is cloud-native, with containerized microservices deployed using Docker and an API Gateway to ensure seamless integration and scalability.

---

## 🚀 Technologies and Tools

- **Backend**: Microservices architecture with Spring Boot (Java) for Authentication and Flask (Python) for Users management.
- **Frontend**: (To be developed)
- **Authentication**: JWT-based authentication for secure user login and registration.
- **Databases**:
  - **AWS RDS (MySQL)**: Used for storing user data and product information.
  - **Amazon S3**: Used for image uploads (user profile images, product images, etc.).
- **Kafka**: Event-driven architecture for publishing and consuming events related to user activities (like image uploads).
- **Docker & Docker Compose**: Containerization and orchestration for microservices.
- **API Gateway**: Provides a unified entry point for accessing all microservices.
- **AWS**: Cloud deployment with integration to various AWS services (RDS, S3).
- **CI/CD**: GitHub Actions for continuous integration and deployment.
- **Security**: JWT (JSON Web Token) for secure authentication.
- **Testing**: Unit and integration tests to ensure the reliability and stability of services.

---

## 🔧 Core Features

1. **JWT Authentication**: Secure user registration, login, and token management.
2. **Product Catalog**: Display of products made from recycled materials, including detailed information and image support.
3. **Shopping Cart**: Functionality to add, remove, and modify products in the cart.
4. **User Profile Management**: View and update personal information and profile images.
5. **Image Upload**: Upload and manage user profile images, with integration to Amazon S3.
6. **Event-Driven Architecture**: Uses Kafka to handle events like image uploads, ensuring decoupled and scalable communication between services.
7. **Microservices**: Built with a modular approach using Spring Boot and Flask, allowing easy scaling and maintenance.
8. **Cloud-Native**: Deployed on AWS with services like RDS, S3, and EC2 for a highly available and fault-tolerant architecture.

---

## 🛠 Architecture

GreenCommerce uses a **microservices architecture**, with each service focused on a specific domain. The current domains include:

- **Authentication Domain**: Manages user registration and login.
- **Users Domain**: Manages user profiles, including the ability to upload profile images and retrieve personal information.
- **Cart Domain** (Future): Will manage shopping cart functionality, allowing users to add/remove products.
- **Payments Domain** (Future): Will handle the payment processing and integration with external gateways.

### Key Components:

1. **API Gateway**: Routes incoming requests to the appropriate microservices, ensuring that the backend services remain isolated.
2. **Microservices**: Each domain (Authentication, Users, Cart, etc.) is implemented as an independent microservice.
3. **Databases**: Each microservice has access to its respective databases (e.g., MySQL on AWS RDS for user data).
4. **Message Broker (Kafka)**: Used for event-driven communication between microservices, ensuring scalability and reliability.

---

## 🔐 Security

- **JWT (JSON Web Token)**: All user authentication is secured using JWT tokens. Users are authenticated using their credentials, and a token is issued for subsequent requests.
- **AWS Security**: All sensitive data (like user passwords and product details) are securely handled and stored using AWS security best practices.

---

## 🌱 Sustainability Focus

GreenCommerce is designed with sustainability in mind, not only by selling products made from recycled materials but also by implementing cloud-native, scalable solutions that minimize resource usage. The use of **containerization** and **microservices architecture** ensures efficient utilization of resources, while **cloud deployment** reduces the carbon footprint of on-premise hardware.

---

## 🧑‍💻 Development and Deployment

- **GitHub Actions**: CI/CD pipelines for automatic testing and deployment of services.
- **Docker**: Each microservice is containerized for easy management and deployment across environments.
- **AWS**: Services deployed on AWS for high availability and scalability, including the use of RDS for MySQL, S3 for storage, and EC2 instances for hosting.

---

## 🚀 Future Development

As the project grows, additional features and domains will be implemented, including:

- **Cart**: To manage users' shopping carts and facilitate the checkout process.
- **Payments**: Integrating external payment services to handle transactions securely.
- **Order Management**: Managing and tracking customer orders.
- **Product Management**: Allowing admin users to add, update, and remove products from the catalog.

---

### 🧑‍💻 Author

Developed by: **Your Name**  
Project: **GreenCommerce** – Distributed Programming, UCE

---


## 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE