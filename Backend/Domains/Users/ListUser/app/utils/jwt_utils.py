from fastapi import HTTPException
import jwt
from jwt import DecodeError, ExpiredSignatureError
from app.config.settings import settings

def decode_token(auth_header: str) -> dict:
    if not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token not provided")

    token = auth_header.split(" ")[1]
    try:
        return jwt.decode(token, settings.JWT_SECRET, algorithms=["HS256"])
    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Expired token")
    except DecodeError:
        raise HTTPException(status_code=401, detail="Invalid token")
