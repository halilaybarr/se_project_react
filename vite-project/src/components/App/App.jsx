import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import constants from '../../utils/constants';


function App() {
const [weather, setWeather] = useState()

  return (
    <>
  <Header weather={weather} setWeather={setWeather} />
   <Main weather={weather} clothingItems={constants.defaultClothingItems} />
    </>
  )
}

export default App
