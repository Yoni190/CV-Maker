function CV ({formData, educationData, workData}) {

  
    return (
        <div>
            <h1>CV</h1>
            <div className="personalInfo">
                <h3 style={{ textAlign: 'left', fontSize: '24px', marginBottom: 0}}>{formData.name}</h3>
                <div className="contact-data" style={{display: 'flex', marginBottom: '10px'}}>
                    <p>{formData.email}</p><span style={{ margin: '0 4px' }}> </span><p>{formData.phoneNumber !== "" && "|"} {formData.phoneNumber}</p><span style={{ margin: '0 4px' }}> </span><p>{formData.address !== "" && "|"} {formData.address}</p>
                </div>
                
            </div>

            {formData.name && <hr style={{ marginTop: '-20px'}}/>}

            

            <div className="work-experience">
                {workData.companyName !== "" && <h2 style={{ textAlign: 'left' }}>Work Experience</h2>}
                {workData.companyName !== "" && <hr style={{ marginTop: '-20px'}}/>}
                <div className="work-container" style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{ textAlign: 'left', fontWeight: 'bold'}}>{workData.companyName}</p>
                    <div className="work-date" style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>{workData.workStart}</p>
                        <span style={{ margin: '0 4px' }}>-</span>
                        <p style={{ fontWeight: 'bold' }}>{workData.workEnd}</p>
                    </div>
                </div>
                
                <div className="work-city" style={{ display: 'flex', justifyContent: 'space-between',  marginTop: '-10px'}}>
                    <p style={{ textAlign: 'left', fontSize: 14, fontStyle: 'italic'}}>{workData.position}</p>
                    <p style={{ fontStyle: 'italic', fontSize: 14 }}>{workData.city}</p>
                </div>

                 {workData.bullets[0] !== "" && workData.bullets.map((bullet, index) => (
                    <ul style={{ marginTop: '-10px'}} key={index}>
                        <li style={{ textAlign: 'left' }}>{bullet}</li>
                    </ul>
                ))} 
                

                
            </div>

            <div className="education">
               {educationData.universityName && <h2 style={{ textAlign: 'left' }}>Education</h2>}
               {educationData.universityName && <hr style={{ marginTop: '-20px'}}/>}
               <div className="uni-container" style={{ display: 'flex', justifyContent: 'space-between'}}>
                <p style={{ fontWeight: 'bold'}}>{educationData.universityName}</p>
                <div className="uni-date" style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold' }}>{educationData.startDate}</p>
                    <span style={{ margin: '0 4px' }}>-</span>
                    <p style={{ fontWeight: 'bold' }}>{educationData.graduationDate}</p>
                </div>
                
               </div>
                
                <div className="uni-location" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-10px' }}>
                    <p style={{ fontStyle: 'italic', fontSize: 14, marginTop: 0}}>{educationData.universityProgram}</p>
                    <p style={{ fontStyle: 'italic', fontSize: 14}}>{educationData.city}</p>
                </div>

                
                {educationData.bullets[0] !== "" && educationData.bullets.map((bullet, index) => (
                    <ul style={{ marginTop: '-10px'}} key={index}>
                        <li style={{ textAlign: 'left' }}>{bullet}</li>
                    </ul>
                ))}
                
            </div>
            
            

        </div>
        
    )
}

export default CV