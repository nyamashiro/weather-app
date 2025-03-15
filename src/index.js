import { getWeatherData } from "./modules/weather";
import { submitForm } from "./modules/form";
import "./modules/style.css";
import { toggleUnits } from "./modules/conversion";

//using callbacks
submitForm(getWeatherData);
toggleUnits(getWeatherData);
