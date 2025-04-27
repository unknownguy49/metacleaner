from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from PIL import Image
import os
import uuid

app = Flask(__name__)
CORS(app)

@app.route("/clean", methods=["POST"])
def clean():
    f = request.files["img"]
    img = Image.open(f)
    out_path = f"cleaned/{uuid.uuid4()}.jpg"
    img.save(out_path, format="JPEG")
    return jsonify({ "url": f"http://localhost:5000/file/{out_path}" })

@app.route("/file/<path:fp>")
def file(fp):
    return send_file(fp, mimetype="image/jpeg")

if __name__ == "__main__":
    os.makedirs("cleaned", exist_ok=True)
    app.run(debug=True)
