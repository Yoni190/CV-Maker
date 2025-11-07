import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './Personal'
import CV from './CV'

function App() {

  const container = {
    display: 'flex'
  }

  const half = {
    width: '50%'
  }

  const CVStyle = {
    borderRadius: '10px',
    boxShadow:  '5px 5px 10px rgba(0, 0, 0, 0.2)',
    padding: '15px'
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: ""
  })

  return (
    <div style={container}>
      <div style={half}>
        <Personal formData={formData} setFormData={setFormData} />
      </div>
      
      <div style={{...half, ...CVStyle}}>
        <CV formData={formData}/>
      </div>
      
    </div>
  )
}

export default App
