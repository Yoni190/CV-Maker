function CV ({formData, educationData}) {
    return (
        <div>
            <h1>CV</h1>
            <div className="personalInfo">
                <h3>{formData.name}</h3>
                <div className="contact-data" style={{display: 'flex', justifyContent: 'center'}}>
                    <p>{formData.email} </p> <p> {formData.phoneNumber !== "" && "|"} {formData.phoneNumber}</p>
                </div>
                
                
                <p>{formData.description}</p>
            </div>

            <div className="education">
                <p>{educationData.universityName}</p>
            </div>
            
            

        </div>
        
    )
}

export default CV