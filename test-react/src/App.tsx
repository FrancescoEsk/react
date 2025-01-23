import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ui = f(state);   l'interfaccia è una funzione 

function App() {
  // HOOK di React
  const [count, setCount] = useState(0)   // un componente che ha uno stato è stateful
  // il tipo di count lo definisce dal valore in useState(), in questo caso number
  // setCount è una funzione per cambiare il valore in memoria, non andiamo mai ad accedere noi alla variabile
  // in questo modo, per modificare una variabile, verrà sempre distrutta e ricostruita ogni volta che la cambiamo



  /*  potevo anche fare
  const countState = useState(0);
  const count = countState[0];
  const setCount = countState[1];
  */

  // perché non ho scritto
  // let count = 0; ?
  // perché non è capace di aggiornarsi in tempo reale come gli HOOK

  const title = 'Ciao Mondo';

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + {title}</h1>
      <div className="card">
        {/* per utilizzare una variabile javascript nell'xml devo metterla tra {} */}
        <button onClick={() => 
          setCount((count) => count + 1)
          }>
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
  )
}

export default App
