# 📂 Domains — GreenCommerce

The **Domains** folder is a central component of the **GreenCommerce** distributed e-commerce platform. This folder contains various business domains that manage specific functionalities within the system, such as **Authentication** and **Users**. As the project evolves, additional domains such as **Cart** and **Payments** will be added.

Currently, the project has the following domains:

- **Authentication**: Handles user authentication, including login and registration.
- **Users**: Manages user information and profile data, including image uploads.

---

## 🛠 Domains Overview

### 1. **Authentication Domain** (Spring Boot, MySQL RDS)

This domain is responsible for user authentication, including login and registration. It uses **Spring Boot** for development and connects to a **MySQL** database hosted on **AWS RDS** for storing user data.

- **Technologies**: Spring Boot, MySQL, Docker
- **Microservices**:
  - **RegisterService**: Allows new users to register.
  - **LoginService**: Allows authenticated users to log in and retrieve JWT tokens.

**Database**: Hosted on **AWS RDS** (MySQL)

**Endpoints**:
- `/auth/register` (POST): Register a new user.
- `/auth/login` (POST): Login for returning users, returns JWT token.

---

### 2. **Users Domain** (Python, MySQL)

This domain manages user data, including profile information and image uploads. The microservices in this domain are developed in **Python** using **Flask**.

- **Technologies**: Python 3.10, Flask, MySQL, Docker
- **Microservices**:
  - **ListUser**: Retrieves user information for authenticated users.
  - **ImageUpload**: Allows users to upload profile images to **Amazon S3** and triggers `ImageUploaded` events to **Kafka**.

**Database**: Hosted on **AWS RDS** (MySQL)

**Endpoints**:
- `/user/info` (GET): Get user information (requires JWT token).
- `/upload` (POST): Upload user profile image (requires userId and image).

---

### 3. **Upcoming Domains**

As the project develops, additional domains will be added to enhance functionality and manage different aspects of the e-commerce platform. Upcoming domains include:

- **Cart**: Handles shopping cart functionalities, allowing users to add and remove items from their carts, view cart contents, and proceed to checkout.
- **Payments**: Manages payment processing, integrating with external payment gateways to securely handle transactions.

---

## 🚀 How to Run the Domains Locally

### Prerequisites

- **Docker** and **Docker Compose** for containerizing microservices.
- **MySQL** running for database connections, or use AWS RDS.
- **AWS credentials** for accessing S3 and other services (for **ImageUpload** domain).

### 1. Clone the Repository

```bash
git clone https://github.com/your_user/greencommerce.git
cd greencommerce
```

### 2. Set Up Each Domain

Each domain has its own set of dependencies, environment variables, and configurations.

#### Authentication Domain (Spring Boot)

1. Set up MySQL RDS: Ensure you have an active AWS RDS instance running MySQL with the appropriate database and credentials configured.

2. Run the Spring Boot services:

    - RegisterService: Build and run the service for user registration.

    - LoginService: Build and run the service for user login.

```bash
mvn clean install
java -jar target/authentication-service.jar
```

#### Users Domain (Python)

1. Set up environment variables for AWS S3 access and MySQL credentials in the .env file.

2. Run the Python services:

    - ListUser: Retrieves user information based on the provided JWT token.

    - ImageUpload: Uploads images to S3 and triggers Kafka events.


```bash
docker-compose up --build -d
python app/main.py
```

### 🐳 Docker Compose Configuration

To run all services locally with Docker, use the provided docker-compose.yml to set up and run the Kafka and Zookeeper containers for the ImageUpload microservice.

```bash
docker-compose up --build -d
```

This will start:

- Kafka and Zookeeper (for the Event-Driven architecture).

- ListUser and ImageUpload microservices (for the Users domain).


### ☁️ AWS Configuration

For the ImageUpload microservice, AWS credentials are required to upload images to S3. Ensure that you configure your AWS credentials properly in the `.env` file for local development:

```bash
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_SESSION_TOKEN=...
AWS_REGION=us-east-..
S3_BUCKET_NAME=lightbuild-user-images
KAFKA_BROKER=localhost:9092
KAFKA_TOPIC=user.image.uploaded
```

## 🧠 Future Developments

This project is still under active development. The Users and Authentication domains are in progress, with more domains being planned:

- Cart: To be implemented, managing user carts and checkout.

- Payments: To be implemented, integrating external payment systems.

Stay tuned as more microservices and functionalities are added to the GreenCommerce ecosystem.

## 📝 Notes

Ensure to keep AWS credentials secure, and rotate them periodically.

Make sure Kafka is running before sending events in the ImageUpload service.

For Users domain, the MySQL database should be properly configured and accessible.



## 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE