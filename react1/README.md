# Router

[Installation | React Router](https://reactrouter.com/start/library/installation) : `npm i react-router`

Ora in main.tsx

```ts
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

```
