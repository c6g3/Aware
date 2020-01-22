import React, { useEffect } from "react";

// @ts-ignore
import { useOpenWeatherMapAPI } from "@jakubzet/use-openweathermap-api";

export const Weather: React.FC = () => {
  const [state, fetchWeather] = useOpenWeatherMapAPI({
    key: "a4d92a74bdc242717ddc520baf1005f7",
    queryConfig: {
      cityName: "Montpellier",
      countryCode: "fr"
    },
    queryType: "name",
    units: "metric"
  });

  useEffect(() => {
    return fetchWeather();
  }, []);

  return (
    <div>
      <section>
        <h4>Loading state:</h4>
        <p>{state.pending ? "true" : "false"}</p>
      </section>

      <section>
        <h4>Error:</h4>
        <p>
          {state.error
            ? `Error: ${state.error.cod} - ${state.error.message}`
            : "Nope"}
        </p>
      </section>

      <section>
        <h4>Data:</h4>
        {state.data && state.data.name && state.data.main ? (
          <>
            <p>Weather in {state.data.name}:</p>
            <ul>
              <li>Currently: {state.data.main.temp} degrees</li>
              <li>Max: {state.data.main.temp_max} degrees</li>
              <li>Min: {state.data.main.temp_min} degrees</li>
            </ul>
          </>
        ) : (
          <p>Nope</p>
        )}
      </section>
    </div>
  );
};
