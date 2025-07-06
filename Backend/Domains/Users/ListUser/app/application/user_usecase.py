from app.repository.user_repository import fetch_user_by_email

def get_user_info_usecase(email: str):
    return fetch_user_by_email(email)
