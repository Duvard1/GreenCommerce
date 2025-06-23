import jwt
import os
from fastapi import HTTPException, Header
from jwt import DecodeError, ExpiredSignatureError

JWT_SECRET = os.getenv("JWT_SECRET")

def verify_token(auth_header: str):
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token no proporcionado")
    
    token = auth_header.split(" ")[1]

    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        return payload  # contiene por ejemplo: { "email": "usuario@email.com" }
    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expirado")
    except DecodeError:
        raise HTTPException(status_code=401, detail="Token inválido")
