import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import forecast from "../../../../../mock/forecast";
import WeeklyForecastItem from "..";
import { describe, it, expect } from "vitest";

describe("WeeklyForecastItem", () => {
  it("renders weekly forecast data correctly", () => {
    render(<WeeklyForecastItem item={forecast.forecastday[0]} />);

    const weekday = dayjs(forecast.forecastday[0].date).format("ddd");
    expect(screen.getByText(weekday)).toBeInTheDocument();

    expect(
      screen.getByText(`${forecast.forecastday[0].day.daily_chance_of_rain} %`)
    ).toBeInTheDocument();

    expect(
      screen.getByText(`${forecast.forecastday[0].day.maxtemp_c}`)
    ).toBeInTheDocument();

    expect(
      screen.getByText(`${forecast.forecastday[0].day.mintemp_c}`)
    ).toBeInTheDocument();

    const img = screen.getByAltText(
      forecast.forecastday[0].day.condition.text
    ) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(forecast.forecastday[0].day.condition.icon);
  });
});
