from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load('model/log_reg_model.sav')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Assume data['features'] is a list of features
    prediction = model.predict([data['features']])
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(port=5328)
