import { useState } from "react";
import { fetchWeather } from "../api/Weather";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async () => {
    if (!city) return;
    const data = await fetchWeather(city);
    setWeather(data);
  };

  // 天気に応じた背景画像を設定
  const getBackgroundImage = () => {
    if (!weather) return "default.jpg"; // デフォルト画像
    const condition = weather.current.condition.text.toLowerCase();

    if (condition.includes("sunny")) return "sunny.jpg";
    if (condition.includes("rain")) return "rainy.jpg";
    if (condition.includes("cloud")) return "cloudy.jpg";
    return "default.jpg";
  };

  return (
    <div style={{ backgroundImage: `url(/images/${getBackgroundImage()})`, backgroundSize: "cover", minHeight: "100vh" }}>
      <h2>天気情報アプリ - Main</h2>
      <input
        type="text"
        placeholder="都市名を入力"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>検索</button>

      {weather && (
        <div>
          <h3>{weather.location.name} の天気</h3>
          <p>気温: {weather.current.temp_c}°C</p>
          <p>天気: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="天気アイコン" />
          <p>取得日時: {weather.location.localtime}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
