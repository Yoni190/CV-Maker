import Info from "./Info"

function Education({educationData, setEducationData}) {

    const onChange = (event) => {
        const {name, value} = event.target
        setEducationData({...educationData, [name]: value})
    }   
    return (
        <>
            <h1>Education</h1>
            <Info labelName="University Name" inputName="universityName" value={educationData.universityName} onChangeText={onChange}/>
        </>
        
    )
}

export default Education