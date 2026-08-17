import { useState } from 'react'
import './App.css'
import { Home } from './pages/home'
import { Tabela } from './pages/tabela'
import { Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tabela" element={<Tabela />} />
    </Routes>


  </>
  )
}

export default App
