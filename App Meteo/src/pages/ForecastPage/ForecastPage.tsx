import { useEffect, useState, useRef } from "react";
import "./ForecastPage.css";
import axios from "axios";
import { OpenMeteoForecastResponse } from "../../types/responses";
import { WeatherData } from "../../types/entities";
import { useSearchParams } from "react-router";

// ui = f(state)

// ho già creato il tipo della risposta API in 'responses.ts' e importato a riga 4 e messo nella get di axios
// stessa costa per il tipo di weatherData. Lo metto in entities, così lo posso riutilizzare dovunque

function ForecastPage() {
    /* axios per utilizzare le API su react */
    /* lo installiamo secondo la sua documentazione */
    /* npm install axios */

    // Hooks
    const [searchParams] = useSearchParams();
    /* per ottenere i valori per la richiesta API dall'URL */

    // State
    const [isLoading, SetIsLoading] = useState(false);
    /* per far vedere che la pagina sta caricando la risposta video */

    const [weatherData, setWeatherData] = useState<WeatherData[]>([]); // devo 'castare' il valore di weatherData (in questo caso era un array)

    /* è una variabile che manteniamo all'interno del nostro componente, ma che non causa dei re-render della pagina.
    Ovvero, equivale ad avere una variabile come la conosciamo noi */
    // References
    const isInitializedRef = useRef(false);
    /* per puntare alla variabile di stato dello useRef, devo fare varRef.current = ... */

    // Methods
    const fromOpenMeteoForecastResponseToWeatherData = (
        openMeteoForecastResponse: OpenMeteoForecastResponse,
    ) => {
        // Declare next weather data
        const nextWeatherData: WeatherData[] = [];

        // Iterate over items
        for (let i = 0; i < openMeteoForecastResponse.hourly.time.length; i++) {
            nextWeatherData.push({
                time: openMeteoForecastResponse.hourly.time[i],
                temperature: openMeteoForecastResponse.hourly.temperature_2m[i],
                humidity:
                    openMeteoForecastResponse.hourly.relative_humidity_2m[i],
                windSpeed: openMeteoForecastResponse.hourly.wind_speed_10m[i],
                rain: openMeteoForecastResponse.hourly.rain[i],
            });
        }

        // Update state
        setWeatherData(nextWeatherData);
    };

    const fetchData = () => {
        SetIsLoading(true);

        // dovrei anche controllare se i parametri effettivamente sono presenti nell'URL (e se non lo fossero, errore)
        const latitude = searchParams.get("latitude");
        const longitude = searchParams.get("longitude");
        const enableRainData = searchParams.get("enableRainData");

        /* questo è il posto giusto per fare una chiamata API */
        /* prendo il curl da openmeteo API, homepage , e lo metto nella get*/

        /* axios.get da come valore di ritorno una PROMESSA, un qualcosa che si aspetta
            nel mentre che react aspetta, possiamo fare altre cose */
        axios
            .get<OpenMeteoForecastResponse>(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m${enableRainData ? ",rain" : ""}`,
            )
            .then((res) => {
                // avendo tipato la risposta, ora posso riferirmi direttamente alla parte di array della risposta che mi interessa
                console.log(res.data.hourly);
                fromOpenMeteoForecastResponseToWeatherData(res.data);
            })
            .catch(() => {
                console.error("Error while loading data");
            })
            .finally(() => {
                SetIsLoading(false); // ho finito di caricare la risposta
            });
        /* then viene eseguito solo dopo aver ottenuto i dati dalla chiamata */
        /* la promessa può dare errore. per questo aggiungo .catch */

        /* solo in dev, la chiamata viene eseguita due volte al posto di una. Per questo motivo abbiamo implementato una References.
        Nell'header, posso vedere il mio URL di richiesta che ho fatto.
        Vedo che stiamo andando a richiedere temperatura, velocità del tempo, ecc.
        
        Su preview vedo la risposta che mi è stata data dall'API.
        In questo caso, vedo che in current ci sono i valori che ho dato io.
        In hourly, invece, contiene, per tutte le metriche richieste, un array.*/
    };

    /* Per vedere la richiesta API che ho fatto: ispeziona -> network -> Fetch/XHR */

    /* come posso fare cose mentre la pagina carica? */
    // Effects
    useEffect(() => {
        if (isInitializedRef.current) return;
        isInitializedRef.current = true;
        fetchData();
    }, []);

    // render
    return (
        <div className="forecast-container">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h3>Forecast</h3>
                    <div className="weather-cards-container">
                        {weatherData.map((data) => (
                            <div key={data.time} className="weather-data-card">
                                <p>
                                    Time: {new Date(data.time).toLocaleString()}
                                </p>
                                <p>Temperature: {data.temperature} °C</p>
                                <p>Humidty: {data.humidity} %</p>
                                <p>Wind speed: {data.windSpeed} km/h</p>
                                <p>Rain: {data.rain} mm</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Se la pagina sta caricando, mostro il caricamento, altrimenti la risposta */}
        </div>
    );
}

export default ForecastPage;
