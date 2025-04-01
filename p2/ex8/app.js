const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Tạo kết nối tới MySQL
const connection = mysql.createConnection({
  host: 'mysql',    // Tên dịch vụ MySQL trong Docker Compose
  user: 'user',     // Tên người dùng MySQL
  password: 'password',  // Mật khẩu của người dùng MySQL
  database: 'mydb'  // Tên database MySQL
});

// Kiểm tra kết nối MySQL
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối MySQL: ' + err.stack);
    return;
  }
  console.log('Kết nối MySQL thành công với ID: ' + connection.threadId);
});

// API để kiểm tra kết nối
app.get('/', (req, res) => {
  connection.query('SELECT NOW()', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Kết nối MySQL thành công', results: results });
  });
});

app.listen(port, () => {
  console.log(`Ứng dụng Node.js đang chạy trên cổng ${port}`);
});
