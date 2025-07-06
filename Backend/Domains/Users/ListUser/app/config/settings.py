from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    DB_CONFIG = {
        "host": os.getenv("DB_HOST"),
        "user": os.getenv("DB_USER"),
        "password": os.getenv("DB_PASSWORD"),
        "database": os.getenv("DB_NAME"),
        "port": int(os.getenv("DB_PORT")),
    }
    JWT_SECRET = os.getenv("JWT_SECRET")

settings = Settings()
