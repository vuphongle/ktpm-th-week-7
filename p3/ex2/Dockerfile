# Sử dụng Node.js image chính thức
FROM node:14

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở port ứng dụng Node.js (có thể là 3000 hoặc tùy chỉnh)
EXPOSE 3000

# Lệnh để chạy ứng dụng Node.js
CMD ["npm", "start"]
