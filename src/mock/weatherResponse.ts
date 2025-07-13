import type { WeatherResponse } from "../types/WeatherResponse";
import location from "./location";
import current from "./current";
import forecast from "./forecast";

const weatherResponseMock: WeatherResponse = {
  location,
  current,
  forecast,
};

export default weatherResponseMock;