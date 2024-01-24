import os
import re
import boto3


SOURCE-ROOT = os.environ.get("SOURCE-ROOT")
ACCESS_KEY_ID = os.environ.get("ACCESS_KEY_ID")
SECRET_ACCESS_KEY = os.environ.get("SECRET_ACCESS_KEY")
STORAGE_REGION = os.environ.get("STORAGE_REGION")
STORAGE_ENDPOINT = os.environ.get("STORAGE_ENDPOINT")
STORAGE_BUCKET = os.environ.get("STORAGE_BUCKET")

s3 = boto3.client(
    "s3",
    aws_access_key_id=ACCESS_KEY_ID,
    aws_secret_access_key=SECRET_ACCESS_KEY,
    region_name=STORAGE_REGION,
    endpoint_url=STORAGE_ENDPOINT,
)

def upload_files_to_s3(path, bucket_name):
    for root, dirs, files in os.walk(path):
        for file in files:
            local_file_path = os.path.join(root, file)
            s3_key = os.path.relpath(local_file_path, local_path)
            s3.upload_file(local_file_path, bucket_name, s3_key)



if __name__ == "__main__":
    upload_files_to_s3(SOURCE-ROOT, STORAGE_BUCKET)
