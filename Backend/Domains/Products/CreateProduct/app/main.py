from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from app import models, schemas, crud, database

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="CreateProduct Service")

@app.post("/products/", response_model=schemas.ProductOut)
def create_product(product: schemas.ProductCreate, db: Session = Depends(database.get_db)):
    return crud.create_product(db, product)
    
@app.get("/")
def read_root():
    return {"message": "API de CreateProduct está activa"}