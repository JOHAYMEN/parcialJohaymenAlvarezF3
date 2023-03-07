import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './componentes/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form/>
    </>
  )
}

export default App
