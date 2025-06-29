from fastapi import HTTPException
import jwt
from jwt import DecodeError, ExpiredSignatureError
from app.core.config import JWT_SECRET

def decode_token(auth_header: str) -> dict:
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token no proporcionado")
    
    token = auth_header.split(" ")[1]
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expirado")
    except DecodeError:
        raise HTTPException(status_code=401, detail="Token inválido")
