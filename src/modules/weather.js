async function getWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BUZJJQFYWWBSZ75MY49HK2KAV`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const weatherDataObject = {
      location: weatherData.resolvedAddress,
      condition: weatherData.days[0].conditions,
      temperature: weatherData.days[0].temp,
    };
    console.log(weatherDataObject);
    return weatherDataObject;
  } catch {
    console.log("Location not found");
    return "Location not found";
  }
}

const convertFtoC = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9));
};

const convertCtoF = function (celsius) {
  return Math.round((9 / 5) * celsius + 32);
};

export { getWeather, convertCtoF, convertFtoC };
