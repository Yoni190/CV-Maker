import Info from "./Info"

function Education({educationData, setEducationData}) {

    const onChange = (event) => {
        const {name, value} = event.target
        setEducationData({...educationData, [name]: value})
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
    return (
        <div style={container}>
            <h2 style={{ textAlign: 'left' }}>Education</h2>
            <Info labelName="University Name" inputName="universityName" value={educationData.universityName} onChangeText={onChange}/>
            <Info labelName="University Program" inputName="universityProgram" value={educationData.universityProgram} onChangeText={onChange} />
            <Info labelName="City" inputName="city" value={educationData.city} onChangeText={onChange} />
            <Info labelName="Start of University Program" inputName="startDate" value={educationData.startDate} onChangeText={onChange} />
            <Info labelName="Date of Graduation" inputName="graduationDate" value={educationData.graduationDate} onChangeText={onChange} />
            {/* Make the bullet input textarea */}
            {/* Make education and work data array */}
            {educationData.bullets.map((bullet, index) => (
                <div key={index}>
                    <label htmlFor="bullet">Bullet {index+1}</label>
                    <div className="bullets" style={{ display: 'flex'}}>
                        <input type="text" name="bullet" id="bullet" value={bullet} style={{ flex: 1 }} onChange={(e) => handleBulletChange(index, e.target.value)}/>
                        <button onClick={addBullet}>+</button>
                        {educationData.bullets.length > 1 && <button onClick={() => deleteBullet(index)}>-</button>}
                    </div>
                </div>
                
            ))}
            
                
        </div>
        
    )
}

export default Education