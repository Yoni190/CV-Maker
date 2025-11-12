import { useState } from "react"
import Info from "./Info"

function Skill({skillData, setSkillData}) {

    const [technicalSkills, setTechnicalSkills] = useState("")
    
    const addSkill = () => {
        const skills = skillData.technicalSkills
        skills.push(technicalSkills)
        setSkillData({...skillData, technicalSkills: skills})
        setTechnicalSkills("")
    }

    const addSkillKeyboard = (event) => {
        if(event.key === 'Enter') {
            const skills = skillData.technicalSkills
            skills.push(technicalSkills)
            setSkillData({...skillData, technicalSkills: skills})
            setTechnicalSkills("")
        }
    }
    
    return (
        <div className="flex flex-col">
            <label htmlFor="technical">Technical Skills</label>
            <div className="technical-container flex">
                <input className="p-2 border rounded-md flex-1" type="text" name="technical" id="technical" 
                value={technicalSkills} onChange={(e) => setTechnicalSkills(e.target.value)} placeholder="Ruby, PHP, Node.JS..." onKeyDown={addSkillKeyboard}/>
                <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={addSkill}>+</button>
            </div>
        </div>
    )
}

export default Skill