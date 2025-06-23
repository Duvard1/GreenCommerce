from fastapi import FastAPI, Depends, Header
from app.database import get_connection
from app.auth import verify_token
from app.models import UserResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.get("/user/info", response_model=UserResponse)
def get_user_info(Authorization: str = Header(...)):
    payload = verify_token(Authorization)
    email = payload.get("email") or payload.get("sub")

    if not email:
        raise HTTPException(status_code=400, detail="Token inválido: no contiene email o sub")

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT name, last_name as lastName, day_birth as dayBirth, month_birth as monthBirth, year_birth as yearBirth, gender, phone_number as phoneNumber, email, profile_photo as profileImage FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return user
