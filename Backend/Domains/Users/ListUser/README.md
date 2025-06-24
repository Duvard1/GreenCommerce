# 📄 ListUser Microservice — GreenCommerce

Este microservicio forma parte del ecosistema **GreenCommerce**, un e-commerce distribuido para la venta de materiales de construcción liviana. El propósito de `ListUser` es exponer un endpoint que permite a un usuario autenticado obtener su información personal desde una base de datos MySQL.

## 📌 Funcionalidad

Permite consultar la información del usuario autenticado a través de un token JWT enviado en la cabecera `Authorization`. Devuelve un objeto JSON con los datos del usuario.

## 🚀 Cómo correr el microservicio

### ✅ Requisitos previos

- Docker
- Archivo `.env` con las siguientes variables:

```env
DB_HOST=greencommerce-mysql.ceapm4qx3wnk.us-east-1.rds.amazonaws.com
DB_PORT=3306
DB_NAME=greencommerce_users_db
DB_USER=admin
DB_PASSWORD=**********
JWT_SECRET=MiClaveJWTSecretaSegura!!1234567890
```

### 🐳 Ejecutar con Docker
Construir la imagen:

```bash
docker build -t list-user-service .
```

### Ejecutar el contenedor:
```bash
docker run -p 8081:8081 --env-file .env list-user-service
```

### Visita el endpoint:
```bash
GET http://localhost:8081/user/info
Headers: Authorization: Bearer <JWT_TOKEN>
```

---

## 🧪 Endpoint expuesto
Este endpoint devuelve la información personal del usuario autenticado.

```bash
Authorization: Bearer <jwt_token>

```

###
Ejemplo de respuesta
```json
{
  "name": "Juan",
  "lastName": "Pérez",
  "dayBirth": 15,
  "monthBirth": 5,
  "yearBirth": 1990,
  "gender": "Hombre",
  "phoneNumber": "0999999999",
  "email": "juan.perez@example.com",
  "profileImage": "https://bucket.s3.amazonaws.com/profile.jpg"
}

```
---

### 🔐 Seguridad
Este microservicio usa JWT (HS256) para proteger el acceso. El secret debe almacenarse como variable de entorno (JWT_SECRET). El token debe incluir el email o sub para identificar al usuario.

### 🧰 Tecnologías usadas

🐍 Python 3.11

⚡ FastAPI

🐬 MySQL

🐳 Docker

🔒 JWT

### 👨‍💻 Autor
Proyecto desarrollado por el equipo de Programación Distribuida – Universidad Central del Ecuador.