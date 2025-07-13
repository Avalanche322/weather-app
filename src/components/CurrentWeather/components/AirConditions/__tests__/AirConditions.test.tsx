import { render, screen } from "@testing-library/react";
import AirConditions from "..";
import current from "../../../../../mock/current";
import { describe, it, expect } from "vitest";


describe("AirConditions", () => {
  it("renders all air condition items correctly", () => {
    render(<AirConditions current={current} />);

    expect(screen.getByText("Air conditions")).toBeInTheDocument();

    expect(screen.getByText("Feel like")).toBeInTheDocument();
    expect(screen.getByText(`${current.feelslike_c} ℃`)).toBeInTheDocument();

    expect(screen.getByText("Wind")).toBeInTheDocument();
    expect(screen.getByText(`${current.wind_kph} km/h`)).toBeInTheDocument();

    expect(screen.getByText("Clouds")).toBeInTheDocument();
    expect(screen.getByText(`${current.cloud} %`)).toBeInTheDocument();

    expect(screen.getByText("Humidity")).toBeInTheDocument();
    expect(screen.getByText(`${current.humidity} %`)).toBeInTheDocument();
  });
});
