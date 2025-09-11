from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from geopy.geocoders import Nominatim

app = Flask(__name__)
CORS(app)

# Load crop CSV
crop_df = pd.read_csv("Crop_recommendation.csv")

# Initialize geolocator
geolocator = Nominatim(user_agent="crop_app")

def get_soil_properties(lat, lng):
    # You can replace these with your real formula
    N = round(50 + lat % 50, 2)
    P = round(30 + lng % 30, 2)
    K = round(20 + (lat + lng) % 20, 2)
    temperature = round(20 + lat % 10, 2)
    humidity = round(60 + lng % 20, 2)
    ph = round(6 + (lat*lng) % 1, 2)
    rainfall = round(100 + (lat+lng) % 100, 2)
    return {
        "N": N, "P": P, "K": K, "temperature": temperature,
        "humidity": humidity, "ph": ph, "rainfall": rainfall
    }

def recommend_crops(soil_props):
    features = ["N","P","K","temperature","humidity","ph","rainfall"]
    soil_values = np.array([soil_props[f] for f in features])

    # Convert relevant crop_df columns to NumPy array once
    crop_features = crop_df[features].to_numpy()  # shape (num_crops, 7)

    # Compute Euclidean distances in a vectorized way
    distances = np.linalg.norm(crop_features - soil_values, axis=1)  # shape (num_crops,)

    # Get indices of crops sorted by distance
    sorted_indices = np.argsort(distances)

    # Collect top crops in order, ensuring uniqueness
    top3 = []
    seen = set()
    for idx in sorted_indices:
        label = crop_df.iloc[idx]["label"]
        if label not in seen:
            top3.append(label)
            seen.add(label)
        if len(top3) == 3:
            break

    return top3


def get_location_name(lat, lng):
    try:
        location = geolocator.reverse((lat, lng), exactly_one=True)
        address = location.raw.get("address", {})
        district = address.get("county") or address.get("district") or "Unknown"
        state = address.get("state") or "Unknown"
        return {"district": district, "state": state}
    except:
        return {"district": "Unknown", "state": "Unknown"}

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.json
    lat = data.get("lat")
    lng = data.get("lng")
    
    soil_props = get_soil_properties(lat, lng)
    crops = recommend_crops(soil_props)
    location_info = get_location_name(lat, lng)
    
    return jsonify({
        "soil_properties": soil_props,
        "recommended_crops": crops,
        "location": location_info
    })

if __name__ == "__main__":
    app.run(debug=True)
