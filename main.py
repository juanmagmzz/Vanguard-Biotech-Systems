from flask import Flask, render_template
import secrets
import os

app = Flask(__name__)

app.secret_key = os.getenv('SECRET_KEY') or secrets.token_hex(32)

@app.route('/')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
