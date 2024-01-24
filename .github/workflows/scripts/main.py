import os
import re
import boto3


SOURCE_ROOT = os.environ.get("SOURCE-ROOT")
STORAGE_ACCESS_KEY_ID = os.environ.get("STORAGE-ACCESS-KEY-ID")
STORAGE_SECRET_ACCESS_KEY = os.environ.get("STORAGE-SECRET-ACCESS-KEY")
STORAGE_REGION = os.environ.get("STORAGE-REGION")
STORAGE_ENDPOINT = os.environ.get("STORAGE-ENDPOINT")
STORAGE_BUCKET = os.environ.get("STORAGE-BUCKET")

s3 = boto3.client(
    "s3",
    aws_access_key_id=STORAGE_ACCESS_KEY_ID,
    aws_secret_access_key=STORAGE_SECRET_ACCESS_KEY,
    region_name=STORAGE_REGION,
    endpoint_url=STORAGE_ENDPOINT,
)

def upload_files_to_s3(path, bucket_name):
    for root, dirs, files in os.walk(path):
        for file in files:
            local_file_path = os.path.join(root, file)
            s3_key = os.path.relpath(local_file_path, path)
            s3.upload_file(local_file_path, bucket_name, s3_key)



if __name__ == "__main__":
    upload_files_to_s3(SOURCE_ROOT, STORAGE_BUCKET)
