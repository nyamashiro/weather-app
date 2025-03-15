const renderWeatherItems = (function () {
  const renderDisplay = function (weatherObject) {
    const slider = document.querySelector(".unit-toggle");
    const content = document.querySelectorAll(".content");
    const weatherData = [
      weatherObject.location,
      [weatherObject.tempInF, weatherObject.tempInC],
      weatherObject.condition,
    ];

    content.forEach((item, i) => {
      if (item.classList.contains("temperature")) {
        if (slider.checked === true) {
          item.textContent = `${weatherData[i][0]} \u00B0F`;
        } else {
          item.textContent = `${weatherData[i][1]} \u00B0C`;
        }
      } else {
        item.textContent = weatherData[i];
      }
    });
  };

  const clearDisplay = function () {
    const location = document.querySelector(".location");
    const clear = document.querySelectorAll(".content");
    clear.forEach((item) => {
      item.textContent = "";
    });

    location.textContent = "Location not found";
  };

  return { renderDisplay, clearDisplay };
})();

export { renderWeatherItems };
