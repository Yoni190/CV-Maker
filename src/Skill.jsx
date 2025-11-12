import { useState } from "react"
import Info from "./Info"
import SkillsInput from "./SkillsInput"
import SkillList from "./SkillList"

function Skill({skillData, setSkillData}) {

    const [technicalSkills, setTechnicalSkills] = useState("")

    


    const deleteSkill = (index) => {
        const skills = skillData.technicalSkills
        skills.splice(index, 1)
        setSkillData({...skillData, technicalSkills: skills})
    }
    
    return (
        <div className="flex flex-col">
            <SkillsInput
                labelName="Technical Skills"
                inputName="technical"
                placeholder="Ruby, Node.JS, PHP..."
                skills={technicalSkills}
                setSkills={setTechnicalSkills}
                skillName='technicalSkills'
                skillType={technicalSkills}
                setSkill={setTechnicalSkills}
                skillData={skillData}
                setSkillData={setSkillData}
            />
            {/* <label htmlFor="technical">Technical Skills</label>
            <div className="technical-container flex">
                <input className="p-2 border rounded-md flex-1" type="text" name="technical" id="technical" 
                value={technicalSkills} onChange={(e) => setTechnicalSkills(e.target.value)} placeholder="Ruby, PHP, Node.JS..." onKeyDown={addSkillKeyboard}/>
                <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={addSkill}>+</button>
            </div> */}

            
                <SkillList 
                    skillData={skillData}
                    skillName='technicalSkills'
                    setSkillData={setSkillData}
                />

            {/* <div className="technical-skills">
                <ul>
                    {skillData.technicalSkills.map((skill, index) => (
                        <div key={index} className="flex justify-between items-center  mt-2">
                            <li className="text-left">{skill}</li>
                            <button onClick={()=>deleteSkill(index)} className="text-white bg-red-500 p-2 rounded-md">Remove</button>
                        </div>
                        
                    ))}
                        
                </ul>
                
            </div> */}
        </div>
    )
}

export default Skill