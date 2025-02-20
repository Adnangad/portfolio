from flask import Flask, request, jsonify, make_response
from flask_cors import CORS  # Import CORS
import requests

app = Flask(__name__)
CORS(app, resources={r"/send-mail": {"origins": "*"}})

import os

MAILTRAP_API_URL = os.getenv("MAILTRAP_API_URL")
MAILTRAP_API_KEY = os.getenv("MAILTRAP_API_KEY")

@app.route("/send-mail", methods=["POST"])
def send_mail():
    """Gets details and sends them"""
    payload = request.get_json()
    if not payload:
        return make_response(jsonify({"message": "Not a JSON"}), 400)

    headers = {
        "Authorization": f"Bearer {MAILTRAP_API_KEY}",
        "Content-Type": "application/json"
    }

    try:
        response = requests.post(MAILTRAP_API_URL, headers=headers, json=payload)
        if response.status_code == 200:
            return jsonify({'success': True, 'message': "Email sent successfully!"}), 200
        else:
            return jsonify({'success': False, 'message': "Unable to send email", 'error': response.text}), response.status_code
    except requests.exceptions.RequestException as e:
        return jsonify({'success': False, 'message': "Server error", 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
