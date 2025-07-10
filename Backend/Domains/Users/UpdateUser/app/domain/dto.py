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

    class Config:
        schema_extra = {
            "example": {
                "name": "admin",
                "lastName": "admin",
                "dayBirth": 1,
                "monthBirth": 1,
                "yearBirth": 2001,
                "gender": "Hombre",
                "phoneNumber": "0999999999",
                "email": "admin@email.com",
                "profileImage": "https://example.com/image.png",
                "shippingAddress": "Av. Amazonas 123, Quito"
            }
        }