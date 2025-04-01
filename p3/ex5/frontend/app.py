from flask import Flask, render_template, request
import redis
import os

app = Flask(__name__)

redis_host = os.getenv('REDIS_HOST', 'redis')
redis_port = 6379
r = redis.Redis(host=redis_host, port=redis_port, db=0)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/vote', methods=['POST'])
def vote():
    choice = request.form['vote']
    r.lpush('votes', choice)  # Lưu vote vào Redis
    return 'Vote received!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
