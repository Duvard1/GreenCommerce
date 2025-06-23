from pydantic import BaseModel

class UserResponse(BaseModel):
    name: str
    lastName: str
    dayBirth: int
    monthBirth: int
    yearBirth: int
    gender: str
    phoneNumber: str
    email: str
    profileImage: str | None
