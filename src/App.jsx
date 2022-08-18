import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
