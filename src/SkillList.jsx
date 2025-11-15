function SkillList({skillData, skillName, setSkillData}) {

    

    const deleteSkill = (index) => {
        const skills = skillData[`${skillName}`]
        skills.splice(index, 1)
        setSkillData({...skillData, [skillName]: skills})
    }

    return (
        <div className="technical-skills">
            <ul className="flex flex-wrap gap-4">
                {skillData[`${skillName}`].map((skill, index) => (
                    <div key={index} className="flex justify-between items-center mt-2 w-[48%]">
                        <li className="text-left">{skill}</li>
                        <button onClick={()=>deleteSkill(index)} className="text-white bg-red-500 p-2 rounded-md cursor-pointer">Remove</button>
                    </div>
                    
                ))}
                    
            </ul>
            
        </div>
    )
}

export default SkillList