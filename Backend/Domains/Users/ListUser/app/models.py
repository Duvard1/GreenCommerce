from pydantic import BaseModel

# This file contains the Pydantic model for the user response
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
