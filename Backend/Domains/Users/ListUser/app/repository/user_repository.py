import mysql.connector
from app.config.settings import settings
from fastapi import HTTPException

def fetch_user_by_email(email: str) -> dict:
    conn = mysql.connector.connect(**settings.DB_CONFIG)
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
