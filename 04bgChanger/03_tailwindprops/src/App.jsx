import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-3xl'>tailwind test</h1>
     <Card username="Kashika" mail="maheshwarikashika212@gmail.com"/>
     <Card username="pia" mail="pia23@gmail.com"/>
     <Card/>
    </>
  )
}

export default App
