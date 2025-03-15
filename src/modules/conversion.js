const toggleUnits = function (callback) {
  const slider = document.querySelector(".unit-toggle");

  slider.addEventListener("click", async (e) => {
    try {
      if (e.target.checked === true) {
        callback(document.querySelector("#search").value);
      } else {
        callback(document.querySelector("#search").value);
      }
    } catch {
      console.log("error");
    }
  });
};

export { toggleUnits };
