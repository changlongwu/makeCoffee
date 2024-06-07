import { useState } from 'react'
import './App.css'
import CoffeeForm from './components/CoffeeForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='title-contianer'>
        <h1 className='title'>On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>

      <CoffeeForm />



    </div>
  )
}

export default App
