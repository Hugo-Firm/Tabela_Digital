import { useState } from 'react'
import './App.css'
import { CharacterCard } from './components/CharacterCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharacterCard characters={{ name: "Elyndra Nightsong", race: "Elfa", characterClass: "Mago", level: 7 }} />
    </>
  )
}

export default App
