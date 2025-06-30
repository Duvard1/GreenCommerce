from fastapi import APIRouter, Header
from app.utils.jwt_utils import decode_token
from app.services.user_service import get_user_by_email
from app.models.user_response import UserResponse

router = APIRouter()

@router.get("/user/info", response_model=UserResponse)
def get_user_info(Authorization: str = Header(...)):
    payload = decode_token(Authorization)
    email = payload.get("email") or payload.get("sub")
    
    
    if not email:
        raise HTTPException(status_code=400, detail="Token sin email o sub")

    return get_user_by_email(email)
