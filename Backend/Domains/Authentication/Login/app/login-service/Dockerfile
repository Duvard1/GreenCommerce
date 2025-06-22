# Usa OpenJDK 17 como base
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el .jar compilado
COPY target/login-service-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto del microservicio
EXPOSE 8082

# Ejecuta la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
