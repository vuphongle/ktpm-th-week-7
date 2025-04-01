# Sử dụng image chính thức của Node.js
FROM node:14

# Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng ứng dụng
EXPOSE 3000

# Lệnh khởi động ứng dụng
CMD ["node", "app.js"]
