import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'

function App() {
const [weather, setWeather] = useState()

  return (
    <>
  <Header weather={setWeather} />
    </>
  )
}

export default App
