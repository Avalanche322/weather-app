import type { Forecast } from "../types/Forecast";

const forecast: Forecast = {
  forecastday: [
    {
      date: "2025-07-12",
      date_epoch: 1752288000,
      day: {
			maxtemp_c: 26,
			mintemp_c: 14,
			avgtemp_c: 20,
			maxwind_kph: 10,
			maxwind_mph: 6,
			totalprecip_mm: 0,
			totalprecip_in: 0,
			totalsnow_cm: 0,
			avgvis_km: 10,
			avgvis_miles: 6,
			avghumidity: 60,
			daily_will_it_rain: 0,
			daily_chance_of_rain: 0,
			daily_will_it_snow: 0,
			daily_chance_of_snow: 0,
			condition: {
				text: "Sunny",
				icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
				code: 1000,
			},
			uv: 5,
			maxtemp_f: 0,
			mintemp_f: 0,
			avgtemp_f: 0
		},
      astro: {
        sunrise: "05:30 AM",
        sunset: "09:00 PM",
        moonrise: "11:00 PM",
        moonset: "05:00 AM",
        moon_phase: "Waning Gibbous",
        moon_illumination: 80,
        is_moon_up: 1,
        is_sun_up: 1,
      },
      hour: [],
    },
  ],
};

export default forecast;