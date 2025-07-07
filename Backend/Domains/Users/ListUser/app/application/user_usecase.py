from app.repository.user_repository import fetch_user_by_email
from app.utils.logger import logger

def get_user_info_usecase(email: str):
    logger.debug(f"Running use case for email: {email}")
    return fetch_user_by_email(email)