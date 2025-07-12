import { Box, Container, Grid } from "@mui/material"
import styled from "@emotion/styled";
import theme from "./theme";
import SearchHistory from "./components/SearchHistory/SearchHistory";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyForecast from "./components/WeeklyForecast";
import { CityProvider } from "./context/CityProvider";
import NotificationAlert from "./components/shared/NotificationAlert";

const StyledContainer = styled(Container)`
	min-height: 100vh;
	align-items: center;
	display: flex;
	padding: 20px;
`;

const StyledWrapper = styled(Box)`
	border: 2px solid ${theme.palette.divider};
	border-radius: 8px;
	padding: 16px;
	width: 100%;
	min-height: 500px;
`;

function App() {

  return (
      <CityProvider>
        <NotificationAlert />
        <StyledContainer>
          <StyledWrapper>
            <SearchHistory />
            <Grid spacing={5} container sx={{ marginTop: "30px" }}>
              <Grid
                size={{ xs: 12, md: 7 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "50px",
                }}
              >
                <CurrentWeather />
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <WeeklyForecast />
              </Grid>
            </Grid>
          </StyledWrapper>
        </StyledContainer>
      </CityProvider>
  );
}

export default App
