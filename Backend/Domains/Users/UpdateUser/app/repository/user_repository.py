import mysql.connector
from fastapi import HTTPException
from app.config.settings import settings
from app.utils.logger import logger

class UserRepository:
    def update_user(self, user):
        try:
            conn = mysql.connector.connect(**settings.DB_CONFIG)
            cursor = conn.cursor()

            query = """
            UPDATE users SET
                name = %s,
                last_name = %s,
                day_birth = %s,
                month_birth = %s,
                year_birth = %s,
                gender = %s,
                phone_number = %s,
                profile_photo = %s,
                shipping_address = %s
            WHERE email = %s
            """
            values = (
                user.name,
                user.lastName,
                user.dayBirth,
                user.monthBirth,
                user.yearBirth,
                user.gender,
                user.phoneNumber,
                user.profileImage,
                user.shippingAddress,
                user.email
            )
            cursor.execute(query, values)
            conn.commit()

            if cursor.rowcount == 0:
                logger.warning(f"No user updated for email: {user.email}")
                raise HTTPException(status_code=404, detail="User not found")

            logger.info(f"User updated: {user.email}")
            return {"message": "User updated successfully"}

        except Exception as e:
            logger.error(f"Error updating user: {str(e)}")
            raise HTTPException(status_code=500, detail="Internal error")

        finally:
            cursor.close()
            conn.close()
