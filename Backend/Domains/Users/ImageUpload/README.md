# 🖼️ Image Upload Service

Microservicio para subir imágenes de usuario a **Amazon S3** y publicar un evento `ImageUploaded` a **Kafka**, cumpliendo una arquitectura **Event-Driven**. Este servicio forma parte del sistema distribuido **GreenCommerce** desarrollado en el marco del curso de Programación Distribuida.

---

## ⚙️ Tecnologías y Herramientas

- **Python 3.10**
- **Flask**: framework web liviano
- **Boto3**: cliente AWS para subir archivos a S3
- **confluent-kafka**: cliente Kafka oficial
- **Kafka + Zookeeper** (por Docker)
- **Amazon S3** (con credenciales temporales de AWS Academy)
- **Docker + Docker Compose** (para Kafka local)

---


## 🔧 Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tu_usuario/image-upload-service.git
cd image-upload-service
```

### 2. Crea entorno virtual

```bash
python -m venv venv
source venv/bin/activate    # Linux/Mac
venv\Scripts\activate       # Windows
```

### 3. Instala dependencias

```bash
pip install -r requirements.txt
```

---

## ☁️ Configuración AWS
Este microservicio requiere credenciales temporales de AWS Academy Learner Lab. Cópialas desde la sección "AWS Details" al iniciar el lab y colócalas en tu archivo .env:

```bash
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_SESSION_TOKEN=...
AWS_REGION=us-east-1
S3_BUCKET_NAME=lightbuild-user-images
KAFKA_BROKER=localhost:9092
KAFKA_TOPIC=user.image.uploaded
```

---
## 🐳 Levantar Kafka con Docker

Corre Kafka y Zookeeper con el docker-compose

```bash
docker-compose up --build -d

```

### 🔊 Creación del Topic en Kafka

Este microservicio publica eventos al topic user.image.uploaded. Debes asegurarte de que el topic exista en Kafka antes de hacer pruebas.

✅ Paso 1: Verifica que Kafka esté corriendo

```bash
docker ps

```

✅ Paso 2: Ingresa al contenedor de Kafka

```bash
docker exec -it <id_contenedor_kafka> bash

```

✅ Paso 3: Crea el topic

```bash
kafka-topics --create \
  --topic user.image.uploaded \
  --bootstrap-server localhost:9092 \
  --partitions 1 \
  --replication-factor 1

```


Ejecutar el servidor

```bash
python app/main.py

```


---
## 🧪 Probar con Postman

1. Método: POST

2. URL: http://localhost:5000/upload

3. Body: form-data

- userId: 17 (tipo Text)

- image: archivo de imagen (tipo File)

### ✅ Respuesta esperada

```bash
{
  "message": "Image uploaded",
  "imageUrl": "https://lightbuild-user-images.s3.us-east-1.amazonaws.com/..."
}

```

--- 

## 🧠 Notas y Consideraciones
Las credenciales de AWS Academy expiran después de unos minutos. Siempre usa las actuales.

El bucket de S3 debe ser creado previamente desde la consola de AWS.

Kafka debe estar corriendo antes de hacer peticiones.

Este microservicio se puede integrar fácilmente con otro que consuma el evento ImageUploaded y actualice una base de datos.

---

### 🧑‍💻 Autor

Desarrollado por: Duvard Cisneros

Proyecto: GreenCommerce – Programación 

Distribuida, UCE
