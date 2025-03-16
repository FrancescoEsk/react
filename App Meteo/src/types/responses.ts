export type OpenMeteoForecastResponse = {
    // tipo della intera risposta API
    // in questo caso, mi sono copiato l'oggett di tutta la risposta su un file, e manualmente vado a dare i tipi e nomi alle cose
    // ancora meglio, si può usare https://transform.tools/json-to-typescript per fare prima
    // (seleziona nei settings 'monotype')
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    current_units: {
        time: string
        interval: string
        temperature_2m: string
        wind_speed_10m: string
    }
    current: {
        time: string
        interval: number
        temperature_2m: number
        wind_speed_10m: number
    }
    hourly_units: {
        time: string
        temperature_2m: string
        relative_humidity_2m: string
        wind_speed_10m: string
        rain: string
    }
    hourly: {
        time: Array<string>
        temperature_2m: Array<number>
        relative_humidity_2m: Array<number>
        wind_speed_10m: Array<number>
        rain: Array<number>
    }
};