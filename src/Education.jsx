import { useEffect, useState } from "react"
import Info from "./Info"

function Education({educationData, setEducationData, educationList, setEducationList}) {
 

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

    const addBulletNew = (index) => {
        const newArray = educationData.bullets
        console.log(`Before Add: ${newArray}`)
        newArray[index][educationData.bullets[index].length] = ""
         console.log(`After Add: ${newArray}`)
        setEducationData({...educationData, bullets: newArray})
    }


    const deleteBulletNew = (index, bulletIndex) => {
        const newArray = educationData.bullets
        newArray[index].splice(bulletIndex, 1)
        console.log(newArray)
        setEducationData({...educationData, bullets: newArray})
    }


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

        const bullets = [[""], ...educationData.bullets]

        console.log(bullets)

        setEducationData({
            ...educationData,
            universityName: names,
            universityProgram: programs,
            city: cities,
            startDate: startDates,
            endDate: endDates,
            bullets: bullets
        });
        setEducationList(prev => [1, ...prev]);
        };

       const removeEducation = (index) => {
            // Deep copy educationData
            const newEducationData = {};

            for (const key in educationData) {
                newEducationData[key] = educationData[key].filter((_, i) => i !== index);
            }

            // Copy educationList also
            const newEducationList = educationList.filter((_, i) => i !== index);

            setEducationData(newEducationData);
            setEducationList(newEducationList);
        };


    return (
        <div style={container}>
            <div className="flex justify-between mb-2">
                <h2 style={{ textAlign: 'left' }}>Education</h2>
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
                    {educationData.bullets[index].map((bullet, bulletIndex) => (
                        <div key={bulletIndex}>
                            <label htmlFor="bullet">Bullet {bulletIndex+1}</label>
                            <div className="bullets" style={{ display: 'flex'}}>
                                <textarea className="border p-2 rounded-md" type="text" name="bullet" id="bullet" value={bullet} style={{ flex: 1 }} onChange={(e) => newBullet(index, bulletIndex, e.target.value)}/>
                                <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={() => addBulletNew(index)}>+</button>
                                {educationData.bullets[index].length > 1 && <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={() => deleteBulletNew(index, bulletIndex)}>-</button>}
                            </div>
                        </div>
                    
                    
                ))}
                    {educationList.length > 1 && <button className="bg-red-500 text-white mt-2 rounded-md py-3 hover:bg-red-700 transition-all duration-300 hover:scale-102" onClick={() => removeEducation(index)}>Remove</button> }
                </div>
                ))}
            
                
        </div>
        
    )
}

export default Education