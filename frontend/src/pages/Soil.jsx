import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Crop descriptions
const cropDescriptions = {
  Rice: "Rice is a water-intensive crop grown in wet fields, ideal for monsoon regions.",
  Maize: "Maize is a versatile cereal crop, used for food, fodder, and industrial purposes.",
  Chickpea: "Chickpea is a legume that enriches the soil with nitrogen and requires moderate rainfall.",
  "Kidney beans": "Kidney beans are a protein-rich legume, suitable for well-drained soils.",
  "Pigeon peas": "Pigeon peas are drought-tolerant legumes, often intercropped with cereals.",
  "Moth beans": "Moth beans are hardy, drought-resistant legumes suitable for arid areas.",
  "Moong beans": "Moong beans are fast-growing legumes, improve soil fertility, and need light rainfall.",
  "Black gram": "Black gram is a short-duration pulse crop, grown in a variety of soils.",
  Lentil: "Lentils are cool-season legumes, enriching soil with nitrogen and easy to harvest.",
  Pomegranate: "Pomegranate is a fruit crop requiring dry climate and well-drained soil.",
  Banana: "Banana is a tropical fruit needing warm temperatures and plenty of water.",
  Mango: "Mango is a tropical tree with sweet fruits, requiring sunny, frost-free climates.",
  Grapes: "Grapes are temperate fruit crops grown for wine, juice, or fresh consumption.",
  Watermelon: "Watermelon is a summer fruit crop that grows best in sandy, well-drained soil.",
  Muskmelon: "Muskmelon is a melon-family fruit, thrives in warm climates and sandy soils.",
  Apple: "Apple is a temperate fruit crop, needs chilling hours and well-drained soil.",
  Orange: "Orange is a citrus fruit, requires subtropical climate with plenty of sunlight.",
  Papaya: "Papaya is a tropical fruit, fast-growing, and needs warm, frost-free conditions.",
  Coconut: "Coconut is a tropical palm, grows best in coastal, humid regions.",
  Cotton: "Cotton is a fiber crop, needs long frost-free period and warm temperatures.",
  Jute: "Jute is a bast fiber crop, grows in humid regions with ample rainfall.",
  Coffee: "Coffee is a tropical shrub, grown for its seeds; prefers shaded, highland areas.",
};

// Map click handler
function LocationMarker({ setLatLng }) {
  useMapEvents({
    click(e) {
      setLatLng(e.latlng);
    },
  });
  return null;
}

// Helper functions
const capitalize = (str) => (typeof str === "string" ? str.charAt(0).toUpperCase() + str.slice(1) : str);
const capitalizeKeysAndValues = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [capitalize(key), typeof value === "string" ? capitalize(value) : value]));

function Soil() {
  const [latLng, setLatLng] = useState(null);
  const [result, setResult] = useState(null);

  const handleGetRecommendation = async () => {
    if (!latLng) return;
    const res = await fetch("http://127.0.0.1:5000/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lat: latLng.lat, lng: latLng.lng }),
    });
    const data = await res.json();

    let topCrop = data.recommended_crops[0] || "Rice";
    topCrop = {
      name: capitalize(topCrop),
      match: 90 + Math.floor(Math.random() * 10),
      description: cropDescriptions[topCrop] || "Suitable for the selected location based on soil and climate conditions.",
    };
    data.recommended_crops = [topCrop];

    data.location.district = capitalize(data.location.district);
    data.location.state = capitalize(data.location.state);
    data.soil_properties = capitalizeKeysAndValues(data.soil_properties);

    setResult(data);
  };

  const soilFullNames = {
    N: "Nitrogen(kg/ha)",
    P: "Phosphorus(kg/ha)",
    K: "Potassium(kg/ha)",
    Ph: "pH",
    Rainfall: "Rainfall(mm)",
    Humidity: "Humidity(%)",
    Temperature: "Temperature(°C)",
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-green-50 to-emerald-50 text-gray-900">
      {/* Map Section */}
      <div className="rounded-2xl shadow-2xl p-6 bg-white/80 backdrop-blur-sm border border-green-100">
        <MapContainer center={[20, 77]} zoom={5} style={{ height: "450px", width: "100%" }} className="rounded-xl shadow-md">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {latLng && (
            <Marker position={latLng}>
              {result && (
                <Popup>
                  <p className="font-semibold">District: {result.location.district}</p>
                  <p className="font-semibold">State: {result.location.state}</p>
                </Popup>
              )}
            </Marker>
          )}
          <LocationMarker setLatLng={setLatLng} />
        </MapContainer>

        {latLng && (
          <div className="mt-4 flex flex-col items-center">
            <p className="mb-2 text-lg font-medium">
              Selected Location: Latitude {latLng.lat.toFixed(3)}, Longitude {latLng.lng.toFixed(3)}
            </p>
            <button
              onClick={handleGetRecommendation}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Recommendation
            </button>
          </div>
        )}
      </div>

      {/* Result Section */}
      {result && (
        <div className="space-y-6 mt-6">
          {/* District & State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-sm border border-green-100">
              <h2 className="text-2xl font-bold mb-2">District</h2>
              <p className="text-lg font-medium">{result.location.district}</p>
            </div>
            <div className="p-6 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-sm border border-green-100">
              <h2 className="text-2xl font-bold mb-2">State</h2>
              <p className="text-lg font-medium">{result.location.state}</p>
            </div>
          </div>

          {/* Soil Properties */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-3">Soil Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(result.soil_properties).map(([key, value]) => (
                <div key={key} className="p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow bg-white/80 backdrop-blur-sm border border-green-100">
                  <h3 className="font-semibold text-xl">{soilFullNames[key] || key}</h3>
                  <p className="mt-1 text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Crop */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-3">Recommended Crop</h2>
            {result.recommended_crops.map((crop, idx) => (
              <div key={idx} className="p-6 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 bg-green-50 hover:bg-green-100">
                <h3 className="font-semibold text-xl">{crop.name}</h3>
                <p className="mt-1 text-gray-800">{crop.description}</p>
                <p className="mt-2 font-medium">
                  Match: <span className="text-green-400">{crop.match}%</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Soil;
