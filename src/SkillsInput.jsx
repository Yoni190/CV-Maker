import { useState } from "react"

function SkillsInput({labelName, inputName, placeholder, skills, setSkills, skillName, skillType, setSkill, skillData, setSkillData}) {

    const [error, setError] = useState("")

    const addSkill = () => {
        if(skillType.trim() === '') {
            setError('Please enter a skill')
            return
        }
        const skills = skillData[`${skillName}`]
        
        skills.push(skillType)
        setSkillData({...skillData, [skillName]: skills})
        setSkill("")
        setError("")
    }

    const addSkillKeyboard = (event) => {
        if(event.key === 'Enter') {
            if(skillType.trim() === '') {
                setError('Please enter a skill')
                return
            }
            const skills = skillData[`${skillName}`]
            skills.push(skillType)
            setSkillData({...skillData, technicalSkills: skills})
            setSkill("")
            setError("")
        }
    }


    return (
        <div>
            <label htmlFor="technical">{labelName}</label>
            <div className="technical-container flex">
                <input className="p-2 border rounded-md flex-1" type="text" name={inputName} id={inputName}
                value={skills} onChange={(e) => setSkills(e.target.value)} placeholder={placeholder} onKeyDown={addSkillKeyboard}/>
                <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={addSkill}>+</button>
            </div>

            {error !== '' && <p className="text-red-600 text-left">{error}</p>}
        </div>
    )
}

export default SkillsInput