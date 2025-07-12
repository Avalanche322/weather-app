import { Box, styled } from "@mui/material";
import BlockHeader from "../shared/BlockHeader";
import WeeklyForecastItem from "./components/WeeklyForecastItem";
import { useGetForecastQuery } from "../../services/weather";
import useCity from "../../hooks/useCity";
import { skipToken } from "@reduxjs/toolkit/query";
import WeeklyForecastSkeleton from "./components/WeeklyForecastSkeleton";
import EmptyDataText from "../shared/EmptyDataText";

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  row-gap: 20px;
`;

function WeeklyForecast() {
	const { city } = useCity();

	const { data, isLoading } = useGetForecastQuery(
    city ? { city } : skipToken
  );
	const forecastday = data?.forecast?.forecastday || [];

	if (isLoading) return <WeeklyForecastSkeleton />;

	if (!data) {
		return <EmptyDataText message="No Weekly Forecast Data :(" />;
	}
	
  return (
    <>
      <BlockHeader variant="h6">Weekly Forecast</BlockHeader>
      <StyledWrapper>
        {forecastday.map((item) => (
          <WeeklyForecastItem key={item.date} item={item} />
        ))}
      </StyledWrapper>
    </>
  );
}

export default WeeklyForecast;
