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
      icon: currentConditions.icon,
      tempInC: Math.round((currentConditions.temp - 32) * (5 / 9)),
      time: currentConditions.datetime,
    };
    renderWeatherItems.renderDisplay(weatherDataObject);
  } catch {
    renderWeatherItems.clearDisplay();
  }
}

async function setWeatherIcon(condition) {
  let weatherIcon;
  if (condition === "none") {
    weatherIcon = await import("../assets/sad.svg");
  } else {
    weatherIcon = await import(`../assets/${condition}.svg`);
  }

  //import() stores the data in the default key inside its object
  return weatherIcon.default;
}

export { getWeatherData, setWeatherIcon };
