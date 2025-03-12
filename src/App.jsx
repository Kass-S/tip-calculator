import { useState } from 'react'
import './App.css'
import TipCard from './components/TipCard'

function App() {

  return (
    <div>
      <div className='flex justify-center'>
        <img src="/assets/logo.svg" alt="splitter logo" className=' mt-20 mb-10' />
      </div>

      <TipCard />     
      
    </div>
  )
}

export default App
