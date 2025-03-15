import { setWeatherIcon } from "./weather";

const renderWeatherItems = (function () {
  const initialDisplay = function () {
    const content = document.querySelectorAll(".content");
    content.forEach((item) => {
      if (item.classList.contains("temperature")) {
        item.textContent = "-\u00B0C";
      } else {
        item.textContent = "-";
      }
    });
  };

  const renderDisplay = function (weatherObject) {
    const slider = document.querySelector(".unit-toggle");
    const content = document.querySelectorAll(".content");
    const weatherData = [
      weatherObject.location,
      [weatherObject.tempInF, weatherObject.tempInC],
      weatherObject.icon,
      weatherObject.condition,
    ];

    content.forEach((item, i) => {
      if (item.classList.contains("temperature")) {
        if (slider.checked === true) {
          item.textContent = `${weatherData[i][0]} \u00B0F`;
        } else {
          item.textContent = `${weatherData[i][1]} \u00B0C`;
        }
      } else if (item.classList.contains("icon")) {
        const icon = document.querySelector(".icon");
        //setWeatherIcon is an async func therefore returns a promise so must use .then
        setWeatherIcon(weatherData[i]).then(
          (response) => (icon.src = response)
        );
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

  return { initialDisplay, renderDisplay, clearDisplay };
})();

export { renderWeatherItems };
