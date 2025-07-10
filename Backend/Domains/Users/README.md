# 👥 Users Domain

The **Users** domain is an essential part of the **GreenCommerce** distributed system, focused on managing user information and profile data. Currently, this domain includes two microservices:

- **ListUser**: Allows authenticated users to retrieve their personal information.
- **ImageUpload**: Enables users to upload images to **Amazon S3** and publishes an `ImageUploaded` event to **Kafka**.

As the domain is still under development, additional microservices like **DeleteUser** and **UpdateUser** will be added to handle user deletion and updates in the future.

---

## 🚀 Technologies Used

- **Python 3.10**  
- **Flask**: Lightweight web framework  
- **MySQL**: Database for storing user data  
- **Boto3**: AWS client for file uploads to **Amazon S3**  
- **Kafka + Zookeeper**: Event-driven architecture  
- **Docker + Docker Compose**: Containerization and orchestration  

---

## 🛠 Microservices in Users Domain

### 1. **ListUser Microservice**

This service allows authenticated users to retrieve their personal information from the database. It requires a JWT token in the `Authorization` header to fetch the user’s data.

- **Endpoint**: `GET http://localhost:8081/user/info`
- **Headers**: `Authorization: Bearer <JWT_TOKEN>`

### 2. **ImageUpload Microservice**

This service allows users to upload profile images to **Amazon S3**. It also triggers an `ImageUploaded` event to **Kafka** in an **Event-Driven** architecture.

- **Endpoint**: `POST http://localhost:5000/upload`
- **Body**: `userId`, `image` (Image file)
- **Response**: Returns a success message and the image URL

---

## 🔧 How to Run the Users Domain Locally

### 1. Clone the repository

```bash
git clone https://github.com/your_user/users-domain.git
cd users-domain
```


### 2. Set up the environment for each microservice
For both ListUser and ImageUpload services, make sure to configure the necessary environment variables, including AWS credentials for ImageUpload and MySQL configuration for ListUser.

## ☁️ AWS Configuration (for ImageUpload)

Ensure you have the correct AWS Academy credentials and add them to your .env file.

```bash
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_SESSION_TOKEN=...
AWS_REGION=us-east-..
S3_BUCKET_NAME=lightbuild-user-images
KAFKA_BROKER=localhost:9092
KAFKA_TOPIC=user.image.uploaded
```

---

## 🐳 Docker Compose for Local Development

Run both microservices with Docker Compose to set up Kafka and other dependencies locally.

```bash
docker-compose up --build -d
```

## ⚙️ Upcoming Microservices
- DeleteUser: This microservice will allow administrators to delete user accounts from the system.

- UpdateUser: This microservice will allow users to update their personal information in the database.

- These microservices will be integrated into the Users domain as it evolves.


### 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE