from flask import Flask, request, jsonify
from s3_uploader import upload_file_to_s3
from kafka_producer import publish_image_uploaded_event

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    user_id = request.form.get('userId')
    file = request.files.get('image')

    if not file or not user_id:
        return jsonify({"error": "Missing file or userId"}), 400

    image_url = upload_file_to_s3(file, file.filename)
    publish_image_uploaded_event(user_id, image_url)

    return jsonify({"message": "Image uploaded", "imageUrl": image_url}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
