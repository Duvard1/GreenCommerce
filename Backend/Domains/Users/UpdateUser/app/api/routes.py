from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from app.utils.jwt_utils import decode_token
from app.domain.dto import UpdateUserDTO
from app.application.update_user_usecase import update_user_usecase
from app.utils.logger import logger

router = APIRouter()
security = HTTPBearer()

@router.put(
    "/user/update",
    summary="Update user information",
    description="Update the authenticated user's personal information. The JWT token must match the email address.",
    response_description="Success or error message",
    tags=["Users"]
)


def update_user(
    user: UpdateUserDTO,
    credentials: HTTPAuthorizationCredentials = Depends(security)
):

    """
    Requires a valid JWT with the `email` or `sub` field.
    The authenticated user must match the email address in the payload.
    """
    token = credentials.credentials
    payload = decode_token(f"Bearer {token}")
    token_email = payload.get("email") or payload.get("sub")

    if token_email != user.email:
        logger.warning(f"Email mismatch: token {token_email}, request {user.email}")
        raise HTTPException(status_code=401, detail="Unauthorized")

    return update_user_usecase(user)
