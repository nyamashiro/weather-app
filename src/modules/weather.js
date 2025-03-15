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

async function setWeatherIcon(icon) {
  let weatherIcon;

  if (icon === "snow") {
    weatherIcon = await import("../assets/snow.svg");
  } else if (icon === "rain") {
    weatherIcon = await import("../assets/rain.svg");
  } else if (icon === "fog") {
    weatherIcon = await import("../assets/fog.svg");
  } else if (icon === "wind") {
    weatherIcon = await import("../assets/windy.svg");
  } else if (icon === "cloudy") {
    weatherIcon = await import("../assets/cloudy.svg");
  } else if (icon === "partly-cloudy-day") {
    weatherIcon = await import("../assets/partly-cloudy-day.svg");
  } else if (icon === "partly-cloudy-night") {
    weatherIcon = await import("../assets/partly-cloudy-night.svg");
  } else if (icon === "clear-day") {
    weatherIcon = await import("../assets/clear-day.svg");
  } else if (icon === "clear-night") {
    weatherIcon = await import("../assets/clear-night.svg");
  }
  //import() stores the data in the default key inside its object
  return weatherIcon.default;
}

export { getWeatherData, setWeatherIcon };
