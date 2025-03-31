const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const fetchWeather = async (city: string) => {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}&lang=ja`);
    if (!response.ok) {
      throw new Error("天気情報を取得できませんでした");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
