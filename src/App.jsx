import { useState } from 'react'
import logo from './logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Automating today for a better world tomorrow</h2>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.adafruit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
           More About Embedded Systems
          </a>
          {' | '}
          <a
            className="App-link"
            href="mailto:adam@adammathewvaughn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us 
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
