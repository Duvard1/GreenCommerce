from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    DB_CONFIG = {
        "host": os.getenv("DB_HOST", "localhost"),
        "user": os.getenv("DB_USER", "test"),
        "password": os.getenv("DB_PASSWORD", "test"),
        "database": os.getenv("DB_NAME", "test_db"),
        "port": int(os.getenv("DB_PORT", "3306")),
    }
    JWT_SECRET = os.getenv("JWT_SECRET", "test-secret")

settings = Settings()
