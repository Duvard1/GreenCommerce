import mysql.connector
import pytest
from app.config.settings import settings  

@pytest.fixture
def db_connection():
    """Test to verify the connection to the database."""
    try:
        conn = mysql.connector.connect(**settings.DB_CONFIG)
        yield conn
    except mysql.connector.Error as err:
        pytest.fail(f"Error connecting to the database: {err}")
    finally:
        if conn:
            conn.close()

def test_db_connection(db_connection):
    """Test that the connection to the database is successful."""
    assert db_connection.is_connected() is True
