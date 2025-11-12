import { useState } from "react"
import Info from "./Info"

function Skill({skillData, setSkillData}) {

    const [technicalSkills, setTechnicalSkills] = useState("")
    const [error, setError] = useState("")
    
    const addSkill = () => {
        if(technicalSkills === '') {
            setError('Please enter a skill')
            return
        }
        const skills = skillData.technicalSkills
        skills.push(technicalSkills)
        setSkillData({...skillData, technicalSkills: skills})
        setTechnicalSkills("")
        setError("")
    }

    const addSkillKeyboard = (event) => {
        if(event.key === 'Enter') {
            if(technicalSkills.trim() === '') {
                setError('Please enter a skill')
                return
            }
            const skills = skillData.technicalSkills
            skills.push(technicalSkills)
            setSkillData({...skillData, technicalSkills: skills})
            setTechnicalSkills("")
            setError("")
        }
    }

    const deleteSkill = (index) => {
        const skills = skillData.technicalSkills
        skills.splice(index, 1)
        setSkillData({...skillData, technicalSkills: skills})
    }
    
    return (
        <div className="flex flex-col">
            <label htmlFor="technical">Technical Skills</label>
            <div className="technical-container flex">
                <input className="p-2 border rounded-md flex-1" type="text" name="technical" id="technical" 
                value={technicalSkills} onChange={(e) => setTechnicalSkills(e.target.value)} placeholder="Ruby, PHP, Node.JS..." onKeyDown={addSkillKeyboard}/>
                <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={addSkill}>+</button>
            </div>
            
            {error !== '' && <p className="text-red-600 text-left">{error}</p>}

            <div className="technical-skills">
                <ul>
                    {skillData.technicalSkills.map((skill, index) => (
                        <div key={index} className="flex justify-between items-center  mt-2">
                            <li className="text-left">{skill}</li>
                            <button onClick={()=>deleteSkill(index)} className="text-white bg-red-500 p-2 rounded-md">Remove</button>
                        </div>
                        
                    ))}
                        
                </ul>
                
            </div>
        </div>
    )
}

export default Skill