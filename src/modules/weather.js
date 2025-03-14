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
      tempInF: currentConditions.temp,
      time: currentConditions.datetime,
    };
    renderWeatherItems.renderAll(weatherDataObject);
  } catch {
    renderWeatherItems.clearDisplay();
  }
}

const convertFtoC = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9));
};

const convertCtoF = function (celsius) {
  return Math.round((9 / 5) * celsius + 32);
};

export { getWeatherData, convertCtoF, convertFtoC };
