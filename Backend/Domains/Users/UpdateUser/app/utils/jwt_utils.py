from fastapi import HTTPException
import jwt
from jwt import DecodeError, ExpiredSignatureError
from app.config.settings import settings

# Ejemplo de cómo decodificar el token en el microservicio
def decode_token(auth_header: str) -> dict:
    if not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token not provided")

    token = auth_header.split(" ")[1]
    try:
        secret = "test-secret"  # Asegúrate de que coincida con tu configuración real
        payload = jwt.decode(token, secret, algorithms=["HS256"])
        return payload
    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Expired token")
    except DecodeError:
        raise HTTPException(status_code=401, detail="Invalid token")
