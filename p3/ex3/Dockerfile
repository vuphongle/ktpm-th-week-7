# Sử dụng Python 3.8 làm base image
FROM python:3.8-slim

# Cài đặt các dependencies
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Sao chép mã nguồn vào container
COPY . /app/

# Mở port 5000
EXPOSE 5000

# Lệnh để chạy ứng dụng Flask
CMD ["python", "app.py"]
