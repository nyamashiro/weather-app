import { getWeatherData, convertCtoF, convertFtoC } from "./modules/weather";
import { submitForm } from "./modules/form";
import "./modules/style.css";

//using callbacks
submitForm(getWeatherData);
