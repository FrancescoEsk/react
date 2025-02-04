import { useEffect } from "react";
import "./ForecastPage.css";
import axios from "axios";

// ui = f(state)

function ForecastPage() {
    /* axios per utilizzare le API su react */
    /* lo installiamo secondo la sua documentazione */
    /* npm install axios */

    // Methods
    const fetchData = async () => {
        /* questo è il posto giusto per fare una chiamata API */
        /* prendo il curl da openmeteo API, homepage , e lo metto nella get*/

        /* axios.get da come valore di ritorno una PROMESSA, un qualcosa che si aspetta
            nel mentre che react aspetta, possiamo fare altre cose */
        const res = await axios
            .get(
                "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch(() => {
                console.error("Error while loading data");
            });
        /* io voglio ricevere la risposta, non la promise. per questo metto la await
        MA per usare await, devo rendere la funzione asincrona, mettendo ASYNC all'inizio della lambda */

        /* then viene eseguito solo dopo aver ottenuto i dati dalla chiamata */

        /* la promessa può dare errore. per questo aggiungo .catch */
    };

    /* come posso fare cose mentre la pagina carica? */
    // Effects
    useEffect(() => {
        fetchData();
    }, []);

    // render
    return (
        <div className="forecast-container">
            <h2>Forecast</h2>
            <p></p>
        </div>
    );
}

export default ForecastPage;
