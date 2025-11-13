import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './Personal'
import CV from './CV'
import Education from './Education'
import Work from './Work'
import Skill from './Skill'


function App() {

  const [educationList, setEducationList] = useState([1])

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
    universityName: [""],
    universityProgram: [""],
    city: [""],
    startDate: [""],
    endDate: [""],
    bullets: [""],
  })

  const [workData, setWorkData] = useState({
    companyName: "",
    position: "",
    city: "",
    workStart: "", 
    workEnd: "",
    bullets: [""]
  })

  const [skillData, setSkillData] = useState({
    technicalSkills: [],
    professionalSkills: []
  })
  

  const [selectedTab, setSelectedTab] = useState(0)

  const tabs = [
    'Personal', 'Education', 'Work', 'Skills'
  ]
  const tabComponents = [
    <Personal formData={formData} setFormData={setFormData} />,
    <Education educationData={educationData} setEducationData={setEducationData} educationList={educationList} setEducationList={setEducationList}/>,
    <Work workData={workData} setWorkData={setWorkData}/>,
    <Skill skillData={skillData} setSkillData={setSkillData} />
  ]



  return (
    <div>
      <h1>CV Maker</h1>
      <div style={container}>
        <div style={half}>
          <div className="flex justify-center gap-5">
            {tabs.map((tab, index) => (
                <button key={tab} className={selectedTab === index ? 'bg-gray-800 text-white p-2 rounded-sm' : 'hover:bg-gray-200 p-2 rounded-sm'} onClick={() => setSelectedTab(index)}>{tab}</button>
            ))}
          </div>

          {tabComponents[selectedTab]}


        </div>
        
        <div style={{...half, ...CVStyle}}>
          <CV 
          formData={formData} 
          educationData={educationData} 
          workData={workData}
          skillData={skillData}/>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
