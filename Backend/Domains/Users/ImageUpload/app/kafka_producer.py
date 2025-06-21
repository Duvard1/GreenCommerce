from confluent_kafka import Producer
from config import KAFKA_BROKER, KAFKA_TOPIC

producer = Producer({'bootstrap.servers': KAFKA_BROKER})

def publish_image_uploaded_event(user_id, image_url):
    event = {
        "event": "ImageUploaded",
        "data": {
            "userId": user_id,
            "imageUrl": image_url
        }
    }
    import json
    producer.produce(KAFKA_TOPIC, key=str(user_id), value=json.dumps(event))
    producer.flush()
