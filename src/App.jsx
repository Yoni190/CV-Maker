import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './Personal'
import CV from './CV'
import Education from './Education'
import Work from './Work'

function App() {

  const container = {
    display: 'flex',
    gap: '15px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow:  '5px 5px 10px rgba(0, 0, 0, 0.2)',
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
    address: "",
  })

  const [educationData, setEducationData] = useState({
    universityName: "",
    universityProgram: "",
    city: "",
    startDate: "",
    graduationDate: "",
    bullets: [""]
  })

  const [workData, setWorkData] = useState({
    companyName: "",
    position: "",
    city: "",
    workStart: "", 
    workEnd: "",
    bullets: [""]
  })

  return (
    <div>
      <h1>CV Maker</h1>
      <div style={container}>
        <div style={half}>
          <Personal formData={formData} setFormData={setFormData} />
          <Education educationData={educationData} setEducationData={setEducationData}/>
          <Work workData={workData} setWorkData={setWorkData}/>
        </div>
        
        <div style={{...half, ...CVStyle}}>
          <CV formData={formData} educationData={educationData} workData={workData}/>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
