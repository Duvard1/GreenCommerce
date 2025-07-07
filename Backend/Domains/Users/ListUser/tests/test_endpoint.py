import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_user_info_success(monkeypatch):
    # Simula decode_token
    def mock_decode_token(auth_header):
        return {"email": "duvard@email.com"}

    # Simula get_user_info_usecase
    def mock_usecase(email):
        return {
            "name": "Duvard",
            "lastName": "Cisneros",
            "dayBirth": 16,
            "monthBirth": 6,
            "yearBirth": 2001,
            "gender": "Hombre",
            "phoneNumber": "0999999999",
            "email": email,
            "profileImage": "https://example.com/profile.jpg",
            "shippingAddress": "Calle Falsa 123"
        }

    monkeypatch.setattr("app.api.routes.decode_token", mock_decode_token)
    monkeypatch.setattr("app.api.routes.get_user_info_usecase", mock_usecase)


    response = client.get(
        "/user/info",
        headers={"Authorization": "Bearer fake.jwt.token"}
    )

    assert response.status_code == 200
    assert response.json()["email"] == "duvard@email.com"
