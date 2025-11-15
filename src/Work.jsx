import Info from "./Info"

function Work({ workData, setWorkData, workList, setWorkList}) {
    const container = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        boxShadow:  '5px 5px 10px rgba(0, 0, 0, 0.2)',
        padding: '15px',
        marginTop: '30px'
    }


    const newOnChange = (event, index, type) => {
        const names = workData[type]
        names[index] = event.target.value
        setWorkData({...workData, [type]: names})
    }

   



    const addWork = () => {
    
    const names = ["", ...workData.companyName];
    const positions = ["", ...workData.position];
    const cities = ["", ...workData.city];
    const startDates = ["", ...workData.workStart];
    const endDates = ["", ...workData.workEnd];

    const bullets = [[""], ...workData.bullets]



    setWorkData({
        ...workData,
        companyName: names,
        position: positions,
        city: cities,
        workStart: startDates,
        workEnd: endDates,
        bullets: bullets
    });
    setWorkList(prev => [1, ...prev]);
    };

    const newBullet = (index, bulletIndex, newValue) => {
        const updatedbullets = workData.bullets
        updatedbullets[index][bulletIndex] = newValue
        setWorkData({...workData, bullets: updatedbullets})
    }

    const addBulletNew = (index) => {
        const newArray = workData.bullets
        newArray[index][workData.bullets[index].length] = ""
        setWorkData({...workData, bullets: newArray})
    }

    const deleteBulletNew = (index, bulletIndex) => {
        const newArray = workData.bullets
        newArray[index].splice(bulletIndex, 1)
        setWorkData({...workData, bullets: newArray})
    }

    const removeWork = (index) => {
        // Deep copy educationData
        const newWorkData = {};

        for (const key in workData) {
            newWorkData[key] = workData[key].filter((_, i) => i !== index);
        }

        // Copy educationList also
        const newWorkList = workList.filter((_, i) => i !== index);

        setWorkData(newWorkData);
        setWorkList(newWorkList);
    };

    
    return (
        <div style={container}>
            <div className="flex justify-between mb-2">
                <h2 style={{ textAlign: 'left' }}>Work Experience</h2>
                <button className='bg-green-600 px-4 py-1 text-white rounded-sm hover:bg-green-700 transition-all duration-300 hover:scale-105' onClick={addWork}>Add</button>
            </div>
            {workList.map((work, index) => (
                <div className="flex flex-col border mb-5 p-2 rounded-md" key={index}>
                    <Info labelName="Company Name" inputName="companyName" value={workData.companyName[index]} onChangeText={(e) => newOnChange(e, index, 'companyName')} />
                    <Info labelName="Position" inputName="position" value={workData.position[index]} onChangeText={(e) => newOnChange(e, index, 'position')} />
                    <Info labelName="City" inputName="city" value={workData.city[index]} onChangeText={(e) => newOnChange(e, index, 'city')} />
                    <Info labelName="Start Date" inputName="workStart" value={workData.workStart[index]} onChangeText={(e) => newOnChange(e, index, 'workStart')} />
                    <Info labelName="End Date" inputName="workEnd" value={workData.workEnd[index]} onChangeText={(e) => newOnChange(e, index, 'workEnd')} />
                    {/* Make the bullet input text area */}
                    {workData.bullets[index].map((bullet, bulletIndex) => (
                        <div key={bulletIndex}>
                            <label htmlFor="bullet">Bullet {bulletIndex+1}</label>
                            <div className="bullets" style={{ display: 'flex'}}>
                                <textarea className="border p-2 rounded-md" type="text" name="bullet" id="bullet" value={bullet} style={{ flex: 1 }} onChange={(e) => newBullet(index, bulletIndex, e.target.value)}/>
                                <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={() => addBulletNew(index)}>+</button>
                                {workData.bullets[index].length > 1 && <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={() => deleteBulletNew(index, bulletIndex)}>-</button>}
                            </div>
                        </div>
                        
                    ))}
                    {workList.length > 1 && <button className="bg-red-500 text-white mt-2 rounded-md py-3 hover:bg-red-700 transition-all duration-300 hover:scale-102" onClick={() => removeWork(index)}>Remove</button> }
                </div>
                
            ))}
            
        </div>
        
    )
}

export default Work