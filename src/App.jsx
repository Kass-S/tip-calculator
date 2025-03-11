import { useState } from 'react'
import './App.css'
import TipCard from './components/TipCard'

function App() {

  return (
    <div>
      <div>
        <p className='flex justify-center my-5'>Splitter</p>
      </div>
      
      <TipCard />
    </div>
  )
}

export default App
