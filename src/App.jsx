import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componants/Header/Header'
import Blogs from './componants/Bologs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
