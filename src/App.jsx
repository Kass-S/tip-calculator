import { useState } from 'react'
import './App.css'
import TipCard from './components/TipCard'

function App() {

  return (
    <div>
      <div>
        <p className='flex justify-center text-2xl font-bold mt-20 text-color-dark tracking-widest'>SPLI</p>
        <p className='flex justify-center text-2xl font-bold mb-10 text-color-dark tracking-widest'>TTER</p>
      </div>

      <TipCard />     
      
    </div>
  )
}

export default App
