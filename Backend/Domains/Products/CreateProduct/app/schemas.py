from pydantic import BaseModel
from typing import Optional

class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    category: str
    image: str
    quantity: int
    brand: str
    rating: Optional[float] = 0.0

class ProductOut(ProductCreate):
    id: int

    class Config:
        orm_mode = True
