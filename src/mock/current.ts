import type { CurrentWeather } from "../types/CurrentWeather";

const current: CurrentWeather = {
	temp_c: 21.5,
	temp_f: 70.7,
	is_day: 1,
	condition: {
		text: "Sunny",
		icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
		code: 1000,
	},
	wind_mph: 5,
	wind_kph: 8,
	wind_degree: 100,
	wind_dir: "E",
	pressure_mb: 1012,
	pressure_in: 29.9,
	precip_mm: 0,
	precip_in: 0,
	humidity: 50,
	cloud: 0,
	feelslike_c: 22.0,
	feelslike_f: 71.6,
	windchill_c: 21.5,
	windchill_f: 70.7,
	heatindex_c: 22.0,
	heatindex_f: 71.6,
	dewpoint_c: 11.0,
	dewpoint_f: 51.8,
	vis_km: 10,
	vis_miles: 6,
	uv: 5,
	gust_mph: 7,
	gust_kph: 11,
	last_updated_epoch: 0,
	last_updated: ""
};

export default current;
