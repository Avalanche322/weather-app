import { useEffect, useState, type ReactNode } from "react";
import { CityContext } from "./CityContext";
import { showNotification } from "../features/notification/slice";
import { useDispatch } from "react-redux";

export function CityProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCity(`${latitude},${longitude}`);
      },
      (error) => {
        console.warn("Geolocation error:", error.message);
        dispatch(
          showNotification({ message: error.message, severity: "error" })
        );
      }
    );
  }, [dispatch]);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}
