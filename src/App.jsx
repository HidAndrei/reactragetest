import { useState } from 'react'
import './App.css'
import chenar from './assets/chenar2.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="chenar-container">
        <img src={chenar} className="chenar-img" alt="chenar" />
        <p className="chenar-text">Pizza Boy</p>
        <p className="chenar-stats">Skill {count}/20</p>
        <button className="chenar-button" onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </>
  )
}

export default App
