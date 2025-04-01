const express = require('express');
const redis = require('redis');
const { Client } = require('pg');
const app = express();
const port = 5001;

const redisClient = redis.createClient({ host: 'redis' });
const dbClient = new Client({
  user: 'user',
  host: 'postgres',
  database: 'votes',
  password: 'password',
  port: 5432,
});

dbClient.connect();

app.get('/result', async (req, res) => {
  const result = await dbClient.query('SELECT * FROM votes');
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
