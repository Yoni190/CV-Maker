import { useEffect, useState } from "react"
import Info from "./Info"

function Education({educationData, setEducationData, educationList, setEducationList}) {

    
    

    const onChange = (event) => {
        const {name, value} = event.target
        setEducationData({...educationData, [name]: value})
    }   

    const newOnChange = (event, index, type) => {
        const names = educationData[type]
        names[index] = event.target.value
        setEducationData({...educationData, [type]: names})
    }

    const container = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        boxShadow:  '5px 5px 10px rgba(0, 0, 0, 0.2)',
        padding: '15px',
        marginTop: '30px'
    }

    const addBullet = () => {
        const newArray = educationData.bullets
        newArray[educationData.bullets.length] = ""
        setEducationData({...educationData, bullets: newArray})
    }

    const deleteBullet = (index) => {
        const newArray = educationData.bullets
        newArray.splice(index, 1)
        setEducationData({...educationData, bullets: newArray})
    }

    const handleBulletChange = (index, newValue) => {
        setEducationData(prev => {
            const updatedBullets = [...prev.bullets]; // copy array
            updatedBullets[index] = newValue; // update the specific bullet
            return { ...prev, bullets: updatedBullets }; // update state
        });
        };


    const newBullet = (index, bulletIndex, newValue) => {
        const updatedbullets = educationData.bullets
        console.log(`Index: ${index}, Bullet Index: ${bulletIndex}`)
        console.log(`New Value: ${newValue}`)
        console.log(updatedbullets[index])
        updatedbullets[index][bulletIndex] = newValue
        setEducationData({...educationData, bullets: updatedbullets})
    }

        // const [educationList, setEducationList] = useState([1])


      const addEducation = () => {
        
        const names = ["", ...educationData.universityName];
        const programs = ["", ...educationData.universityProgram];
        const cities = ["", ...educationData.city];
        const startDates = ["", ...educationData.startDate];
        const endDates = ["", ...educationData.endDate];

        setEducationData({
            ...educationData,
            universityName: names,
            universityProgram: programs,
            city: cities,
            startDate: startDates,
            endDate: endDates,
        });
        setEducationList(prev => [1, ...prev]);
        };

    return (
        <div style={container}>
            <h2 style={{ textAlign: 'left' }}>Education</h2>
            <div className="flex justify-between mb-2">
                <button className='bg-green-600 px-4 py-1 text-white rounded-sm hover:bg-green-700 transition-all duration-300 hover:scale-105' onClick={addEducation}>Add</button>
            </div>


            {educationList.map((education, index) => (
                <div className="flex flex-col border mb-5 p-2 rounded-md" key={index}>
                    <Info labelName="University Name" inputName="universityName" value={educationData.universityName[index]} onChangeText={(e) => newOnChange(e, index, 'universityName')}/>
                    <Info labelName="University Program" inputName="universityProgram" value={educationData.universityProgram[index]} onChangeText={(e) => newOnChange(e, index, 'universityProgram')} />
                    <Info labelName="City" inputName="city" value={educationData.city[index]} onChangeText={(e) => newOnChange(e, index, 'city')} />
                    <Info labelName="Start of University Program" inputName="startDate" value={educationData.startDate[index]} onChangeText={(e) => newOnChange(e, index, 'startDate')} />
                    <Info labelName="Date of Graduation" inputName="endDate" value={educationData.endDate[index]} onChangeText={(e) => newOnChange(e, index, 'endDate')} />
                    {/* Make the bullet input textarea */}
                    {/* Make education and work data array */}
                    {educationData.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex}>
                            <label htmlFor="bullet">Bullet {bulletIndex+1}</label>
                            <div className="bullets" style={{ display: 'flex'}}>
                                <textarea className="border p-2 rounded-md" type="text" name="bullet" id="bullet" value={bullet[index]} style={{ flex: 1 }} onChange={(e) => newBullet(index, bulletIndex, e.target.value)}/>
                                <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={addBullet}>+</button>
                                {educationData.bullets.length > 1 && <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={() => deleteBullet(bulletIndex)}>-</button>}
                            </div>
                        </div>
                    
                    
                ))}
                </div>
                ))}
            
                
        </div>
        
    )
}

export default Education