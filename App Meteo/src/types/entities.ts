export type WeatherData = {
    // creo un tipo per la risposta API (le quattro cose che mi ha dato in hourly{})
    time: string;
    humidity: number;
    windSpeed: number;
    temperature: number;
    rain: number;
};