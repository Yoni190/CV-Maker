import Info from "./Info"

function Work({ workData, setWorkData }) {
    const container = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        boxShadow:  '5px 5px 10px rgba(0, 0, 0, 0.2)',
        padding: '15px',
        marginTop: '30px'
    }

    const onChange = (event) => {
        const { name, value } = event.target
        setWorkData({...workData, [name]: value})
    }

    const addBullet = () => {
        const newArray = workData.bullets
        newArray[workData.bullets.length] = ""
        setWorkData({...workData, bullets: newArray})
    }

    const deleteBullet = (index) => {
        const newArray = workData.bullets
        newArray.splice(index, 1)
        setWorkData({...workData, bullets: newArray})
    }

    const handleBulletChange = (index, newValue) => {
        setWorkData(prev => {
            const updatedBullets = [...prev.bullets]; // copy array
            updatedBullets[index] = newValue; // update the specific bullet
            return { ...prev, bullets: updatedBullets }; // update state
        });
        };

    
    return (
        <div style={container}>
            <h2 style={{ textAlign: 'left' }}>Work Experience</h2>
            <Info labelName="Company Name" inputName="companyName" value={workData.companyName} onChangeText={onChange} />
            <Info labelName="Position" inputName="position" value={workData.position} onChangeText={onChange} />
            <Info labelName="City" inputName="city" value={workData.city} onChangeText={onChange} />
            <Info labelName="Start Date" inputName="workStart" value={workData.workStart} onChangeText={onChange} />
            <Info labelName="End Date" inputName="workEnd" value={workData.workEnd} onChangeText={onChange} />
            {/* Make the bullet input text area */}
            {workData.bullets.map((bullet, index) => (
                <div key={index}>
                    <label htmlFor="bullet">Bullet {index+1}</label>
                    <div className="bullets" style={{ display: 'flex'}}>
                        <input type="text" name="bullet" id="bullet" value={bullet} style={{ flex: 1 }} onChange={(e) => handleBulletChange(index, e.target.value)}/>
                        <button onClick={addBullet}>+</button>
                        {workData.bullets.length > 1 && <button onClick={() => deleteBullet(index)}>-</button>}
                    </div>
                </div>
                
            ))}
        </div>
        
    )
}

export default Work