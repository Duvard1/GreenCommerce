FROM python:3.11-slim

# Establecer el directorio de trabajo
WORKDIR /code

# Copiar todos los archivos al contenedor
COPY . .

# Instalar las dependencias del proyecto
RUN pip install --no-cache-dir -r requirements.txt

# Ejecutar las pruebas unitarias
RUN pytest ./Backend/Domains/Users/UpdateUser/tests

# Exponer el puerto en el que la aplicación correrá
EXPOSE 8082

# Comando para ejecutar el servidor
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8082"]
