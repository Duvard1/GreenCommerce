FROM python:3.11-slim

WORKDIR /code
COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8081

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8081"]
