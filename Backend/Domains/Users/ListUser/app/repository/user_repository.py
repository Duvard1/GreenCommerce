import mysql.connector
from app.config.settings import settings
from fastapi import HTTPException
from app.utils.logger import logger

def fetch_user_by_email(email: str) -> dict:
    logger.info(f"Connecting to the database to search: {email}")

    try:
        conn = mysql.connector.connect(**settings.DB_CONFIG)
        cursor = conn.cursor(dictionary=True)
        query = """
            SELECT name, last_name AS lastName, day_birth AS dayBirth, 
                month_birth AS monthBirth, year_birth AS yearBirth, 
                gender, phone_number AS phoneNumber, email, 
                profile_photo AS profileImage, shipping_address AS shippingAddress
            FROM users WHERE email = %s
        """
        cursor.execute(query, (email,))
        user = cursor.fetchone()
        if not user:
            logger.warning(f"User with email {email} not found")
            raise HTTPException(status_code=404, detail="User not found")
        
        logger.info(f"User found: {user}")
        return user

    except Exception as e:
        logger.error(f"Error searching user: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

    finally:
        cursor.close()
        conn.close()