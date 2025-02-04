import "./HomePage.css";
import { useState } from "react";
import { useNavigate } from "react-router";

// installare con npm install --save-dev @types/node
const __DEV__ = process.env.NODE_ENV === "development"; // con development dico di essere in dev

function HomePage() {
    // Hooks
    const nav = useNavigate();

    // State
    const [latitude, setLatitude] = useState(
        __DEV__ ? "45.4383842" : "",
    ); /* se sono in DEV, mi autocompila gli input così */
    const [longitude, setLongitude] = useState(__DEV__ ? "10.9916215" : "");

    // Methods
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        /* il parametro l'ho trovato hoverando su (e) nel form  */

        e.preventDefault(); /* preveniamo html dal fare il solito che farebbe (rompe react) */

        nav("/forecast"); /* navigo verso la pagina di forecast */
    };

    // render
    return (
        <div className="container">
            <form onSubmit={(e) => onSubmit(e)} className="form">
                {/* perché un form funzioni, deve contenere input e bottone */}
                <h2>Forecast App</h2>
                <input
                    type="number" /* per adattare l'input al tipo di valore che deve inserire l'utente */
                    /* e previene anche che l'utente inserisca lettere */
                    /* se fosse da mobile, gli spunterebbe pure la tastiera giusta */
                    value={latitude}
                    onChange={(e) => {
                        setLatitude(e.target.value);
                    }}
                    required /* se la aggiungo, viene messa a true. se non è dato, il form non invia al bottone */
                    placeholder="Latitutde"
                />
                <input
                    type="number"
                    value={longitude}
                    onChange={(e) => {
                        setLongitude(e.target.value);
                    }}
                    required
                    placeholder="Longitude"
                />
                <button className="form-button">Search</button>
                {/* avrei potuto mettere id, ma se avessi bisogno di altri bottoni per l'app, meglio usare class */}
            </form>
        </div>
    );
}

export default HomePage;
