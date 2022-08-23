import { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import moment from 'moment'
import FireBase from './Clases/Firebase'
//import './App.css'


FireBase.Iniciar()

function App() {
  const [Fechas, setFechas] = useState({inicial:moment().startOf("M").format("YYYY-MM-DD"),final:moment().endOf("M").format("YYYY-MM-DD")})
  const [CentroSeleccionado, setCentroSeleccionado] = useState(undefined)
  const [ListaCentro, setListaCentro] = useState([])
  return (
    <div className="App">
      <Navbar Fechas={Fechas} setFechas={setFechas}/>
      <Main Fechas={Fechas} CentroSeleccionado={CentroSeleccionado} ListaCentro={ListaCentro}/>
    </div>
  )
}

export default App
