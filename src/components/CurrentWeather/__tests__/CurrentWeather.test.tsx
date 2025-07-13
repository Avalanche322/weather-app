import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, type Mock } from "vitest";
import { useGetForecastQuery } from "../../../services/weather";
import CurrentWeather from "..";
import weatherResponseMock from "../../../mock/weatherResponse";

vi.mock("../../../hooks/useCity", () => ({
  default: () => ({ city: "Kyiv" }),
}));

vi.mock("../../../services/weather", () => ({
  useGetForecastQuery: vi.fn(),
}));

describe("CurrentWeather", () => {
  it("renders WeatherSkeleton when loading", () => {
    (useGetForecastQuery as Mock).mockReturnValue({ isLoading: true });
    render(<CurrentWeather />);
    expect(screen.getByTestId(/current-weather-skeleton/i)).toBeInTheDocument();
  });

  it("renders EmptyDataText when no data", () => {
    (useGetForecastQuery as Mock).mockReturnValue({
      isLoading: false,
      data: undefined,
    });
    render(<CurrentWeather />);
    expect(screen.getByText(/no curent weather data/i)).toBeInTheDocument();
  });

  it("renders weather components when data is available", () => {
    (useGetForecastQuery as Mock).mockReturnValue({
      isLoading: false,
      data: weatherResponseMock,
    });
    render(<CurrentWeather />);
    expect(screen.getByText(/current weather/i)).toBeInTheDocument(); // Details
    expect(screen.getByText(/air conditions/i)).toBeInTheDocument(); // AirConditions
    expect(screen.getByText(/today forecast/i)).toBeInTheDocument(); // TodayForecast
  });
});
