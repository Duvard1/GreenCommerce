import mysql.connector
from app.core.config import DB_CONFIG
from fastapi import HTTPException

def get_user_by_email(email: str):
    conn = mysql.connector.connect(**DB_CONFIG)
    cursor = conn.cursor(dictionary=True)
    query = """
        SELECT name, last_name AS lastName, day_birth AS dayBirth, 
               month_birth AS monthBirth, year_birth AS yearBirth, 
               gender, phone_number AS phoneNumber, email, 
               profile_photo AS profileImage
        FROM users WHERE email = %s
    """
    cursor.execute(query, (email,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return user
