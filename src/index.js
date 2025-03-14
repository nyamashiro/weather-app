import { getWeather, convertCtoF, convertFtoC } from "./modules/weather";
import { submitForm } from "./modules/form";

//using promises
submitForm().then((location) => {
  getWeather(location);
});

//using callbacks
// submitForm(getWeather);
