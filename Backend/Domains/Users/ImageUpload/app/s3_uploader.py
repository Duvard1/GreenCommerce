import boto3
import uuid
from config import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET_NAME, AWS_SESSION_TOKEN

s3 = boto3.client(
    "s3",
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    aws_session_token=AWS_SESSION_TOKEN,
    region_name=AWS_REGION
)
def upload_file_to_s3(file, filename):
    unique_filename = f"{uuid.uuid4()}_{filename}"
    s3.upload_fileobj(file, S3_BUCKET_NAME, unique_filename)
    return f"https://{S3_BUCKET_NAME}.s3.{AWS_REGION}.amazonaws.com/{unique_filename}"
