# 🖥️ Backend — GreenCommerce

The **Backend** folder contains all the server-side components and services for the **GreenCommerce** distributed e-commerce platform. This includes all the **domains** and **microservices** necessary for the core functionality of the system, such as **Authentication**, **Users**, and more as the project evolves.

---

## 🚀 Overview

The **GreenCommerce** backend is designed to be a highly modular and scalable system, built using a microservices architecture. The backend services are divided into several **domains**, each of which is responsible for a specific business functionality, and all of them are designed to communicate with each other seamlessly.

### Current Domains:

- **Authentication**: Manages user login, registration, and authentication.
- **Users**: Handles user profile data, including user image uploads.
  
### Upcoming Domains:
- **Cart**: Will manage shopping cart functionality.
- **Payments**: Will handle payment processing and integration with external services.

---

## 🛠 Microservices in the Backend

### 1. **Authentication Domain**
   - **Technology**: Spring Boot, MySQL (AWS RDS)
   - **Microservices**:
     - **RegisterService**: Allows new users to register.
     - **LoginService**: Authenticates users and returns a JWT token.

   - **Endpoints**:
     - `/auth/register` (POST): Registers a new user.
     - `/auth/login` (POST): Logs in a user and returns a JWT token.

### 2. **Users Domain**
   - **Technology**: Python 3.10, Flask, MySQL, Docker
   - **Microservices**:
     - **ListUser**: Allows an authenticated user to retrieve their personal information.
     - **ImageUpload**: Allows users to upload images to **Amazon S3** and publishes an event to **Kafka**.

   - **Endpoints**:
     - `/user/info` (GET): Retrieves user information (requires JWT token).
     - `/upload` (POST): Uploads a profile image (requires userId and image).

---

## ☁️ AWS Integration

### 1. **Authentication Domain**:
   - Uses **AWS RDS** for MySQL database hosting.
   - **JWT** tokens are used for authentication, and the service connects to AWS resources for secure handling.

### 2. **Users Domain**:
   - Uses **Amazon S3** for image uploads (with AWS Academy credentials for temporary access).
   - **Kafka** is used for publishing events related to user image uploads (in an **Event-Driven** architecture).

---

## 🧩 Event-Driven Architecture

In the **Users** domain, the **ImageUpload** microservice uses **Kafka** to publish events (`ImageUploaded`). This allows other services or components to react to the event, such as updating the database or notifying the user of a successful upload.

### Published Event:
- **Event**: `ImageUploaded`
- **Kafka Topic**: `user.image.uploaded`

---

## 🧑‍💻 Author

Developed by: **Your Name**  
Project: **GreenCommerce** – Distributed Programming, UCE

---

## 🧠 Future Developments

This project is still under development, and additional domains will be added as the platform grows. Upcoming domains include:

- **Cart**: Will manage shopping cart functionality, allowing users to add and remove items.
- **Payments**: Will handle the payment processing and integration with external gateways.

As the project progresses, more microservices will be added to cover additional functionalities such as **DeleteUser**, **UpdateUser**, **Product Management**, and others.

---

### ⚠️ Notes

- Ensure **AWS credentials** are securely stored and rotated periodically.
- **Kafka** must be running for the **ImageUpload** service to function correctly and publish events.
- The **MySQL database** should be set up correctly and accessible for both the **Authentication** and **Users** domains.

---

## 🌱 Project Roadmap

1. **Authentication**: Completed
2. **Users**: Completed (ListUser, ImageUpload)
3. **Cart**: In Progress
4. **Payments**: Planned
5. **Additional microservices** (e.g., **DeleteUser**, **UpdateUser**, **Product Management**): Planned

## 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE