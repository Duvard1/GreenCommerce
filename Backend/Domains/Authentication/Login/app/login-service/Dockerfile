# Etapa 1: Build con Maven (ejecuta tests)
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app
COPY . .
RUN ./mvnw clean package

# Etapa 2: Ejecutar la app
FROM openjdk:17-jdk-slim
VOLUME /tmp
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "/app.jar"]
