from flask import Flask, render_template, request
from util import parser
from queue import Queue
app = Flask(__name__)
foo ="hi"
@app.route('/')
def index():
    return render_template('index.html',foo=foo)

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8000, debug=True)
