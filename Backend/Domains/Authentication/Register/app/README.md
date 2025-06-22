# 🧾 Register Service - GreenCommerce

Este microservicio forma parte del sistema distribuido **GreenCommerce**, orientado a la gestión de usuarios. Permite el registro de nuevos usuarios en la plataforma, conectándose a una base de datos **MySQL** mediante **Spring Boot** y gestionado a través de **Docker Compose**.

---

## 🚀 Tecnologías utilizadas

- Java 17
- Spring Boot 3.5.0
- MySQL 8
- Docker & Docker Compose
- Hibernate JPA
- Spring Security
- JPA / Hibernate

---

## ⚙️ Configuración de la base de datos

En el archivo `docker-compose.yml` se define un servicio `mysql-db` con:

- Usuario: `root`
- Contraseña: `root`
- Base de datos: `greencommerce_users_db`

Este script se inicializa automáticamente con `greencommerce_users_db.sql`.

---

## 🐳 Cómo levantar el entorno local con Docker Compose

### 1. Limpiar contenedores y volúmenes previos

```bash
docker-compose down -v
```

### 2. Construir e iniciar los servicios
```bash
docker-compose up --build
```

El servicio estará disponible en:
📍 http://localhost:8081/auth/register

### Ejemplo de request

{
  "name": "Juan",
  "lastName": "Pérez",
  "dayBirth": 12,
  "monthBirth": 5,
  "yearBirth": 1995,
  "gender": "Hombre",
  "phoneNumber": "0999999999",
  "email": "juan.perez@email.com",
  "password": "secreta123"
}

---

### 🧑‍💼 Autor
Desarrollado para la materia de Programación Distribuida
Proyecto: GreenCommerce