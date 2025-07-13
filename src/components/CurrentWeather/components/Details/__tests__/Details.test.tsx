import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import weatherResponseMock from "../../../../../mock/weatherResponse";
import Details from "..";
import { describe, it, expect } from "vitest";

describe("Details", () => {
  it("renders city name, date, temperature, and condition", () => {
    render(<Details data={weatherResponseMock} />);

    expect(screen.getByText("Lviv")).toBeInTheDocument();

    const formattedDate = dayjs(weatherResponseMock.location.localtime).format(
      "DD MMM"
    );
    expect(screen.getByText(formattedDate)).toBeInTheDocument();

    expect(
      screen.getByText(`${weatherResponseMock.current.temp_c} ℃`)
    ).toBeInTheDocument();

    const min = weatherResponseMock.forecast.forecastday[0].day.mintemp_c;
    const max = weatherResponseMock.forecast.forecastday[0].day.maxtemp_c;
    expect(screen.getByText(`H: ${max} L: ${min}`)).toBeInTheDocument();

    expect(
      screen.getByText(weatherResponseMock.current.condition.text)
    ).toBeInTheDocument();

    const icon = screen.getByAltText(
      weatherResponseMock.current.condition.text
    ) as HTMLImageElement;
    expect(icon).toBeInTheDocument();
    expect(icon.src).toContain(weatherResponseMock.current.condition.icon);
  });
});
