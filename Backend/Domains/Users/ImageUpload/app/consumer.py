from confluent_kafka import Consumer
import json

conf = {
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'test-consumer-group',
    'auto.offset.reset': 'earliest'
}

consumer = Consumer(conf)
consumer.subscribe(['user.image.uploaded'])

print("Escuchando eventos de imagen subida...")

while True:
    msg = consumer.poll(1.0)  # espera 1 segundo por mensaje
    if msg is None:
        continue
    if msg.error():
        print("Error:", msg.error())
    else:
        data = json.loads(msg.value().decode('utf-8'))
        print("Evento recibido:", data)
