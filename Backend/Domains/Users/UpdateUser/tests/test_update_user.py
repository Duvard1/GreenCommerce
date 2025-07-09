import mysql.connector
import pytest
from app.config.settings import settings  # Asumimos que la configuración DB está en settings.py

@pytest.fixture
def db_connection():
    """Prueba para verificar la conexión a la base de datos."""
    try:
        # Intentamos conectarnos a la base de datos usando los parámetros de configuración
        conn = mysql.connector.connect(**settings.DB_CONFIG)
        yield conn  # Devolvemos la conexión a la base de datos para que se pueda usar
    except mysql.connector.Error as err:
        pytest.fail(f"Error al conectar a la base de datos: {err}")
    finally:
        if conn:
            conn.close()  # Cerramos la conexión después de la prueba

def test_db_connection(db_connection):
    """Prueba que la conexión a la base de datos se realiza correctamente."""
    # Verificamos si la conexión está activa
    assert db_connection.is_connected() is True
