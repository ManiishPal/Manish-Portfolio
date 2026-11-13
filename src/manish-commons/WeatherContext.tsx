import React, { createContext, useContext, useState, useEffect } from "react";

export type WeatherMode = "auto" | "default" | "winter";

interface WeatherContextType {
  weatherMode: WeatherMode;
  setWeatherMode: (mode: WeatherMode) => void;
  toggleWeather: () => void;
  isWinter: boolean;
  statusMessage: string | null;
  clearStatusMessage: () => void;
}

const WeatherContext = createContext<WeatherContextType>({
  weatherMode: "auto",
  setWeatherMode: () => {},
  toggleWeather: () => {},
  isWinter: false,
  statusMessage: null,
  clearStatusMessage: () => {},
});

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [weatherMode, setWeatherModeState] = useState<WeatherMode>(() => {
    const saved = localStorage.getItem("portfolio_weather_mode");
    if (saved === "default" || saved === "winter" || saved === "auto") {
      return saved;
    }
    return "auto";
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const month = new Date().getMonth();
  const isCalendarWinter =
    month === 10 || month === 11 || month === 0 || month === 1;

  const isWinter =
    weatherMode === "default"
      ? false
      : weatherMode === "winter"
        ? true
        : isCalendarWinter;

  const setWeatherMode = (mode: WeatherMode) => {
    setWeatherModeState(mode);
    localStorage.setItem("portfolio_weather_mode", mode);

    if (mode === "default") {
      setStatusMessage("Weather: Default Dashboard active (Seasonal off)");
    } else if (mode === "winter") {
      setStatusMessage("Weather: Seasonal (Winter) active");
    } else {
      setStatusMessage(
        isCalendarWinter
          ? "Weather: Auto Calendar active (Winter Season)"
          : "Weather: Auto Calendar active (Default Season)",
      );
    }
  };

  const toggleWeather = () => {
    // If currently winter, switch to default ("leave seasonal previous things")
    // If currently default, switch to winter ("change as it is")
    const nextMode: WeatherMode = isWinter ? "default" : "winter";
    setWeatherMode(nextMode);
  };

  const clearStatusMessage = () => {
    setStatusMessage(null);
  };

  // Listen for storage changes in case reset happens
  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem("portfolio_weather_mode");
      if (saved === "default" || saved === "winter" || saved === "auto") {
        setWeatherModeState(saved);
      } else {
        setWeatherModeState("auto");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherMode,
        setWeatherMode,
        toggleWeather,
        isWinter,
        statusMessage,
        clearStatusMessage,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => useContext(WeatherContext);
