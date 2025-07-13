import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { describe, expect, it, vi } from "vitest";
import TodayForecast from "..";
import weatherResponseMock from "../../../../../mock/weatherResponse";

// Фіксуємо час, щоб прогноз відображався
const fixedDate = "2025-07-13T12:00:00";

vi.mock("dayjs", async (importOriginal) => {
  const mod: any = await importOriginal();
  return {
    ...mod,
    default: () => mod.default(fixedDate),
  };
});

describe("TodayForecast", () => {
  it("renders filtered forecast items for today", () => {
    render(<TodayForecast data={weatherResponseMock} />);

    const header = screen.getByText(/Today Forecast/i);
    expect(header).toBeInTheDocument();

    const filtered = weatherResponseMock.forecast.forecastday[0].hour.filter(
      (hour) => dayjs(hour.time).isAfter(dayjs(fixedDate))
    );

    filtered.forEach((hour) => {
      const formattedTime = dayjs(hour.time).format("HH:mm");
      expect(screen.getByText(formattedTime)).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(`${hour.temp_c}.*°`, "i"))
      ).toBeInTheDocument();
    });
  });
});
