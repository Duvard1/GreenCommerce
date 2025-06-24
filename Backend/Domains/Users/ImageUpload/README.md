# 🖼️ Image Upload Microservice - GreenCommerce

Microservice for uploading user images to **Amazon S3** and publishing an `ImageUploaded` event to **Kafka**, following an **Event-Driven** architecture. This service is part of the **GreenCommerce** distributed system developed as part of the Distributed Programming course.

---

## ⚙️ Technologies and Tools

- **Python 3.10**
- **Flask**: lightweight web framework
- **Boto3**: AWS client for uploading files to S3
- **confluent-kafka**: official Kafka client
- **Kafka + Zookeeper** (via Docker)
- **Amazon S3** (with temporary AWS Academy credentials)
- **Docker + Docker Compose** (for local Kafka)

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your_user/image-upload-service.git
cd image-upload-service
```

### 2. Create a virtual environment

```bash
python -m venv venv
source venv/bin/activate    # Linux/Mac
venv\Scripts\activate       # Windows
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

## ☁️  AWS Configuration
This microservice requires temporary AWS Academy Learner Lab credentials. Copy them from the "AWS Details" section when starting the lab and place them in your `.env` file:

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
## 🐳 Running Kafka with Docker
Start Kafka and Zookeeper with the docker-compose command:

```bash
docker-compose up --build -d

```

### 🔊 Creating the Topic in Kafka
This microservice publishes events to the user.image.uploaded topic. You must ensure that the topic exists in Kafka before testing.

✅ Step 1: Check that Kafka is running

```bash
docker ps

```

✅ Step 2: Enter the Kafka container

```bash
docker exec -it <id_contenedor_kafka> bash

```

✅ Step 3: Create the topic

```bash
kafka-topics --create \
  --topic user.image.uploaded \
  --bootstrap-server localhost:9092 \
  --partitions 1 \
  --replication-factor 1

```


Run the server

```bash
python app/main.py

```


---
## 🧪 Test with Postman

1. Método: POST

2. URL: http://localhost:5000/upload

3. Body: form-data

- userId: 17 (tipo Text)

- image: archivo de imagen (tipo File)

### ✅ Expected Response

```bash
{
  "message": "Image uploaded",
  "imageUrl": "https://lightbuild-user-images.s3.us-east-1.amazonaws.com/..."
}

```

--- 

## 🧠 Notes and Considerations
- AWS Academy credentials expire after a few minutes. Always use the current ones.

- The S3 bucket must be created beforehand via the AWS console.

- Kafka must be running before making requests.

- This microservice can easily be integrated with another that consumes the `ImageUploaded` event and updates a database.

---

### 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE