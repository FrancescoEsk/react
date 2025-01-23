# react

React è una libreria JavaScript open-source sviluppata per la creazione di interfacce utente,
in particolare per applicazioni web a
pagina singola (SPA - Single Page Applications).

> Le pagine create con React sono **REATTIVE**, a differenza di quelle statiche prodotte da html e css.

Serve a costruire componenti UI riutilizzabili e gestire lo stato dell'applicazione in modo efficiente.
React utilizza un approccio dichiarativo, il che significa che descrivi come dovrebbe apparire l'interfaccia utente
in base allo stato dell'applicazione, e React si occupa di aggiornare il DOM in modo ottimale quando lo stato cambia.

# Vantaggi

Alcuni vantaggi di React includono:

- Componenti riutilizzabili
- Aggiornamenti efficienti del DOM tramite il Virtual DOM
- Unidirectional data flow (flusso di dati unidirezionale)
- Grande ecosistema e supporto della comunità

Framework : strumenti e primitive già scritte da qualcun'altro che mi semplificano il lavoro

> In sostanza, è un pacchetto che scarico e che mi aiuta a sviluppare

per ora, **Framework == Libreria**

*Qualunque pagina web, alla fine di tutto, viene processata in html, JavaScript e css.*

# Primo progetto in React

[Qui](https://react.dev/learn/start-a-new-react-project) si può trovare come iniziare un progetto in React.

Posso creare un'app React senza framework? Si, utilizzando ***vite***, un set di strumenti che completa il 'contorno' che manca a React.

Dentro la cartella del nuovo progetto `npm create vite@latest`: fornisci il nome al progetto, scegli React come framework, variante TypeScript + SWC.

Finito. Adesso la nostra cartella è pronta. E installiamo npm nella cartella `npm install`

Ora diamo un'occhiata agli script nel file *package.json*

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```

Proviamo quindi il progetto, con `npm run dev`  e ci avvisa come raggiungere il sito

> ➜  Local:   http://localhost:5173/

Se notiamo il file *index.html*

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

notiamo che l'unica cosa che renderizza tutto ciò che facciamo in react è il div con *id="root"*

# App.tsx

React si concentra sul riutilizzare componenti *(tipo pezzi di html)* per creare la nostra app. Si basa quindi su un'**albero di componenti**.

```xml
<>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
```

Questo pezzo di codice, contenuto nel file, sembra proprio un html sotto steroidi. In pratica, noi prendiamo un **modello di html** e ci **iniettiamo delle funzioni**. Come in questo blocchetto:

```xml
<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
```

Il componente react è una funzione App() che ritorna il codice xml da reinderizzare.

> Inoltre, la funzione si aggiorna in runtime quando salviamo il file App.tsx

Creiamo un file esempio: Test.tsx

```ts
function Test() {

    return (
        <div>
            Hello World
        </div>
    )
}

export default Test;
```

# Hook di React

[Qui](https://react.dev/reference/react/hooks) puoi trovare la documentazione ufficiale riguardo questo argomento.
