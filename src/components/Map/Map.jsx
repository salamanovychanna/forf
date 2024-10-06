import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// WeatherAPI Key
const weatherApiKey = "dac1b033f4e84938b1d130917240510";

// OpenWeatherMap API Key for overlays
const openWeatherMapApiKey = "d9e587001879da7f873c41459e90a613"; // Replace with your OpenWeatherMap API key

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [userPosition, setUserPosition] = useState([51.505, -0.09]); // Default to London
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch current weather data for the user's location
  const fetchWeather = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${lat},${lon}&aqi=no`
      );
      setWeatherData([res.data]);
    } catch (err) {
      console.error(err);
      setError("Error fetching weather data.");
    }
  };

  // Fetch 7-day weather forecast for the user's location
  const fetchForecast = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${lat},${lon}&days=7`
      );
      setForecastData(res.data.forecast.forecastday);
    } catch (err) {
      console.error(err);
      setError("Error fetching forecast data.");
    }
  };

  // Get the user's current position
  useEffect(() => {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setUserPosition([latitude, longitude]);
      fetchWeather(latitude, longitude);
      fetchForecast(latitude, longitude);
      setLoading(false);
    };

    const error = (error) => {
      console.error(error);
      setLoading(false);
      // Default to London if geolocation fails
      fetchWeather(51.505, -0.09);
      fetchForecast(51.505, -0.09);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Prepare forecast data for chart
  const chartData = forecastData.map((day) => ({
    date: day.date,
    temp: day.day.avgtemp_c,
    weather: day.day.condition.text,
    icon: day.day.condition.icon,
  }));

  // Create weather icons dynamically based on the condition
  const getWeatherIcon = (condition) => {
    return new L.Icon({
      iconUrl: condition.icon,
      iconSize: [40, 40],
    });
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      {/* Header */}
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        Live Weather & 7-Day Forecast
      </h1>

      {/* Map Section */}
      <div
        style={{
          height: "60vh",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={userPosition}
          zoom={10}
          style={{ height: "100%" }}
        >
          <LayersControl position="topright">
            {/* Base Map Layer */}
            <LayersControl.BaseLayer checked name="OpenStreetMap">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            </LayersControl.BaseLayer>

            {/* Clouds Layer */}
            <LayersControl.Overlay name="Clouds">
              <TileLayer
                url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${openWeatherMapApiKey}`}
                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
              />
            </LayersControl.Overlay>

            {/* Precipitation Layer */}
            <LayersControl.Overlay name="Precipitation">
              <TileLayer
                url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${openWeatherMapApiKey}`}
                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
              />
            </LayersControl.Overlay>

            {/* Wind Layer */}
            <LayersControl.Overlay name="Wind">
              <TileLayer
                url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${openWeatherMapApiKey}`}
                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
              />
            </LayersControl.Overlay>
          </LayersControl>

          {/* Marker for weather data */}
          {weatherData &&
            weatherData.map((data) => (
              <Marker
                key={data.location.name}
                position={[data.location.lat, data.location.lon]}
                icon={getWeatherIcon(data.current.condition)}
              >
                <Popup>
                  <b>{data.location.name}</b>
                  <br />
                  {data.current.condition.text}
                  <br />
                  Temperature: {Math.round(data.current.temp_c)}°C
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>

      {/* Forecast Section */}
      <div style={{ marginTop: "30px" }}>
        <h2
          style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}
        >
          7-Day Weather Forecast
        </h2>

        <div style={{ width: "100%", height: 300, marginBottom: "40px" }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#82ca9d"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Weather Icons & Details */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {chartData.length > 0 ? (
            chartData.map((day, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  textAlign: "center",
                  margin: "10px",
                  width: "120px",
                }}
              >
                <img
                  src={day.icon}
                  alt={day.weather}
                  style={{ width: "50px" }}
                />
                <p
                  style={{
                    margin: "10px 0",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {day.date}
                </p>
                <p style={{ margin: "0", color: "#888" }}>
                  {Math.round(day.temp)}°C
                </p>
                <p style={{ margin: "0", color: "#666" }}>{day.weather}</p>
              </div>
            ))
          ) : (
            <p>No forecast data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
