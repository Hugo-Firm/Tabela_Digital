import { useState } from 'react'
import './App.css'
import { Home } from './pages/home'
import { Tabela } from './pages/tabela'
import { DiceRoller } from './pages/DiceRoller'
import { Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tabela" element={<Tabela />} />
      <Route path="/DiceRoller" element={<DiceRoller />} />
    </Routes>


  </>
  )
}

export default App
