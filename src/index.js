import { getWeatherData } from "./modules/weather";
import { renderWeatherItems } from "./modules/render";
import { submitForm } from "./modules/form";
import "./modules/style.css";
import { toggleUnits } from "./modules/conversion";

//using callbacks
renderWeatherItems.initialDisplay();
submitForm(getWeatherData);
toggleUnits(getWeatherData);
