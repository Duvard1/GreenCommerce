from fastapi import APIRouter, Request, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from controllers.delete_user_controller import handle_delete_user

router = APIRouter()
security = HTTPBearer()

@router.delete("/delete-user", summary="Delete authenticated user", tags=["User"])
def delete_user(request: Request, credentials: HTTPAuthorizationCredentials = Security(security)):
    return handle_delete_user(request)
