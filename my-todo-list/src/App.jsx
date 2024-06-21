import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StoreProvider, useStore } from './Hooks/useStore'
import List from './Components/List'
import Form from './Components/Form'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <StoreProvider>
      <Form />
      <hr/>
      <List/>
    </StoreProvider>
  )
}

export default App
