import { renderWeatherItems } from "./render";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BUZJJQFYWWBSZ75MY49HK2KAV`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const currentConditions = weatherData.currentConditions;
    const weatherDataObject = {
      location: weatherData.resolvedAddress,
      condition: currentConditions.conditions,
      tempInF: Math.round(currentConditions.temp),
      tempInC: Math.round((currentConditions.temp - 32) * (5 / 9)),
      time: currentConditions.datetime,
    };
    renderWeatherItems.renderDisplay(weatherDataObject);
  } catch {
    renderWeatherItems.clearDisplay();
  }
}

export { getWeatherData };
