from app.domain.dto import UpdateUserDTO
from app.repository.user_repository import UserRepository

def update_user_usecase(user: UpdateUserDTO):
    repo = UserRepository()
    return repo.update_user(user)
