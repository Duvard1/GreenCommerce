from pydantic import BaseModel, EmailStr
from typing import Optional

class UpdateUserDTO(BaseModel):
    name: str
    lastName: str
    dayBirth: int
    monthBirth: int
    yearBirth: int
    gender: str
    phoneNumber: str
    email: EmailStr
    profileImage: Optional[str] = None 
    shippingAddress: Optional[str] = None 
