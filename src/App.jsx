import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contenedor'>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App
