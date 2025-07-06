from pydantic import BaseModel, EmailStr

class UserResponse(BaseModel):
    name: str
    lastName: str
    dayBirth: int
    monthBirth: int
    yearBirth: int
    gender: str
    phoneNumber: str
    email: EmailStr
    profileImage: str | None
    shippingAddress: str | None