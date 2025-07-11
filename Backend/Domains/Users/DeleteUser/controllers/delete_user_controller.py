from fastapi import Request, HTTPException
from models.user_model import delete_user_by_email
from utils import decode_token, logger

def handle_delete_user(request: Request):
    auth_header = request.headers.get("Authorization")
    user_data = decode_token(auth_header)

    email = user_data.get("email") or user_data.get("sub")
    if not email:
        raise HTTPException(status_code=400, detail="Token with no email or sub")

    logger.info(f"Attempting to delete user with email: {email}")
    success = delete_user_by_email(email)

    if not success:
        raise HTTPException(status_code=404, detail="User not found")

    logger.info(f"User with email {email} deleted.")
    return {"message": "User deleted successfully"}
