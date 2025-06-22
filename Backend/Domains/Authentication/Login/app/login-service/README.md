# 🔐 Login Service - GreenCommerce

Este microservicio forma parte del sistema distribuido **GreenCommerce**, orientado a la autenticación de usuarios. Permite iniciar sesión en la plataforma mediante **Spring Boot**, verificando credenciales contra una base de datos **MySQL** y gestionado a través de **Docker Compose**.

---

## 🚀 Tecnologías utilizadas

- Java 17  
- Spring Boot 3.5.0  
- MySQL 8  
- Docker & Docker Compose  
- Hibernate JPA  
- Spring Security  
- JWT (JSON Web Token)  

---

## ⚙️ Configuración de la base de datos

En el archivo `docker-compose.yml` se define un servicio `mysql-db` compartido con otros microservicios. Este contiene:

- Usuario: `root`  
- Contraseña: `root`  
- Base de datos: `greencommerce_users_db`  

El acceso desde este microservicio se realiza utilizando el hostname `mysql-db`, interno al entorno Docker.

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
📍 http://localhost:8082/auth/login


### 🧪 Ejemplo de request

```bash
{
  "email": "juan.perez@email.com",
  "password": "secreta123"
}
```

### ✅ Ejemplo de respuesta exitosa

```bash
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

### 🧑‍💼 Autor
Desarrollado para la materia de Programación Distribuida
Proyecto: GreenCommerce
