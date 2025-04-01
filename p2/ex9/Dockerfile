# Sử dụng image chính thức của Python
FROM python:3.9

# Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép các file requirements vào container
COPY requirements.txt ./

# Cài đặt các dependencies từ requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 5000 cho ứng dụng Flask
EXPOSE 5000

# Lệnh khởi động ứng dụng
CMD ["python", "app.py"]
