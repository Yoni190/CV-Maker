import { useState } from "react"
import Info from "./Info"
import SkillsInput from "./SkillsInput"
import SkillList from "./SkillList"

function Skill({skillData, setSkillData}) {

    const [technicalSkills, setTechnicalSkills] = useState("")
    const [professionalSkills, setProfessionalSkills] = useState("")


    


    const deleteSkill = (index) => {
        const skills = skillData.technicalSkills
        skills.splice(index, 1)
        setSkillData({...skillData, technicalSkills: skills})
    }
    
    return (
        <div className="flex flex-col">
            {/* Technical Skills */}
            <SkillsInput
                labelName="Technical Skills"
                inputName="technicalSkills"
                placeholder="Ruby, Node.JS, PHP..."
                setSkills={setTechnicalSkills}
                skillName='technicalSkills'
                skillType={technicalSkills}
                setSkill={setTechnicalSkills}
                skillData={skillData}
                setSkillData={setSkillData}
            />
            
                <SkillList 
                    skillData={skillData}
                    skillName='technicalSkills'
                    setSkillData={setSkillData}
                />
                
                {/* Professional Skills */}
                <SkillsInput
                labelName="Professional Skills"
                inputName="professionalSkills"
                placeholder="Communication, Teamwork..."
                setSkills={setProfessionalSkills}
                skillName='professionalSkills'
                skillType={professionalSkills}
                setSkill={setProfessionalSkills}
                skillData={skillData}
                setSkillData={setSkillData}
            />
            
                <SkillList 
                    skillData={skillData}
                    skillName='professionalSkills'
                    setSkillData={setSkillData}
                />
        </div>
    )
}

export default Skill