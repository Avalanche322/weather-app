import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useGetForecastQuery } from "../../../services/weather";
import WeeklyForecast from "..";
import weatherResponseMock from "../../../mock/weatherResponse";

vi.mock("../../../hooks/useCity", () => ({
  default: () => ({ city: "Kyiv" }),
}));

vi.mock("../../../services/weather", () => ({
  useGetForecastQuery: vi.fn(),
}));

describe("WeeklyForecast", () => {
  it("renders skeleton when loading", () => {
    (useGetForecastQuery as any).mockReturnValue({ isLoading: true });
    render(<WeeklyForecast />);
    expect(screen.getByTestId(/weekly-forecast-skeleton/i)).toBeInTheDocument();
  });

  it("renders empty text when no data", () => {
    (useGetForecastQuery as any).mockReturnValue({
      isLoading: false,
      data: null,
    });
    render(<WeeklyForecast />);
    expect(screen.getByText(/no weekly forecast data/i)).toBeInTheDocument();
  });

  it("renders forecast items when data is available", () => {
    (useGetForecastQuery as any).mockReturnValue({
      isLoading: false,
      data: weatherResponseMock,
    });

    render(<WeeklyForecast />);
    expect(screen.getByText(/weekly forecast/i)).toBeInTheDocument();
    expect(screen.getAllByText(/H:/i).length).toBeGreaterThan(0); // forecast items rendered
  });
});
