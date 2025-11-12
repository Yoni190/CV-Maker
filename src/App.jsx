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

  const [selectedTab, setSelectedTab] = useState(0)



  return (
    <div>
      <h1>CV Maker</h1>
      <div style={container}>
        <div style={half}>
          <div className="flex justify-center gap-5">
            <button className={selectedTab === 0 ? 'bg-gray-800 text-white p-2 rounded-sm' : 'hover:bg-gray-200 p-2 rounded-sm'} onClick={() => setSelectedTab(0)}>Personal</button>
            <button className={selectedTab === 1 ? 'bg-gray-800 text-white p-2 rounded-sm' : 'hover:bg-gray-200 p-2 rounded-sm'} onClick={() => setSelectedTab(1)}>Education</button>
            <button className={selectedTab === 2 ? 'bg-gray-800 text-white p-2 rounded-sm' : 'hover:bg-gray-200 p-2 rounded-sm'} onClick={() => setSelectedTab(2)}>Work</button>
          </div>

          {selectedTab === 0 && (
            <Personal formData={formData} setFormData={setFormData} />
          )}

          {selectedTab === 1 && (
            <Education educationData={educationData} setEducationData={setEducationData}/>
          )}

          {selectedTab === 2 && ( 
            <Work workData={workData} setWorkData={setWorkData}/>
          )}

        </div>
        
        <div style={{...half, ...CVStyle}}>
          <CV formData={formData} educationData={educationData} workData={workData}/>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
