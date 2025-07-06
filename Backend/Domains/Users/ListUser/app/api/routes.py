from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from app.utils.jwt_utils import decode_token
from app.application.user_usecase import get_user_info_usecase
from app.models.user_model import UserResponse
from app.utils.logger import logger

router = APIRouter()
security = HTTPBearer()

@router.get(
    "/user/info",
    response_model=UserResponse,
    summary="Get authenticated user info",
    description=(
        "Retrieves profile data for the currently authenticated user. "
        "Requires a valid JWT token provided through Swagger's 'Authorize' button."
    ),
    responses={
        200: {
            "description": "User info returned successfully",
            "content": {
                "application/json": {
                    "example": {
                        "name": "Juan",
                        "lastName": "Pérez",
                        "dayBirth": 15,
                        "monthBirth": 6,
                        "yearBirth": 1995,
                        "gender": "Hombre",
                        "phoneNumber": "0991234567",
                        "email": "juan.perez@email.com",
                        "profileImage": "https://example.com/profile.jpg",
                        "shippingAddress": "Calle Falsa 123"
                    }
                }
            },
        },
        400: {"description": "Missing or malformed token"},
        401: {"description": "Invalid or expired token"},
        404: {"description": "User not found"}
    },
)
def get_user_info(credentials: HTTPAuthorizationCredentials = Depends(security)):
    logger.info("request received in /user/info")
    token = credentials.credentials
    payload = decode_token(f"Bearer {token}")

    email = payload.get("email") or payload.get("sub")
    if not email:
        logger.warning("Token sin email o sub")
        raise HTTPException(status_code=400, detail="Token with no email or sub")
        
    logger.info(f"Searching for user with email: {email}")
    return get_user_info_usecase(email)
