const renderWeatherItems = (function () {
  const renderLocation = function (weatherObject) {
    const locationDiv = document.querySelector(".location");
    const locationData = weatherObject.location;

    locationDiv.textContent = locationData;
  };

  const renderTemperature = function (weatherObject) {
    const temperatureDiv = document.querySelector(".temperature");
    const temperatureData = `${weatherObject.tempInF} \u00B0F`;

    temperatureDiv.textContent = temperatureData;
  };

  const renderCondition = function (weatherObject) {
    const conditionDiv = document.querySelector(".condition");
    const conditionData = weatherObject.condition;

    conditionDiv.textContent = conditionData;
  };

  const renderAll = function (weatherObject) {
    renderLocation(weatherObject);
    renderTemperature(weatherObject);
    renderCondition(weatherObject);
  };

  const clearDisplay = function () {
    const location = document.querySelector(".location");
    const content = document.querySelectorAll(".content");
    content.forEach((item) => {
      item.textContent = "";
    });

    location.textContent = "Location not found";
  };

  return { renderAll, clearDisplay };
})();

export { renderWeatherItems };
