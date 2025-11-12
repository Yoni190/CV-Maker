function CV ({formData, educationData, workData, skillData}) {

  
    return (
        <div>
            <h1>CV</h1>
            <div className="personalInfo">
                <h3 style={{ textAlign: 'left', fontSize: '24px', marginBottom: 0}}>{formData.name}</h3>
                <div className="contact-data" style={{display: 'flex', marginBottom: '10px'}}>
                    <p>{formData.email}</p><span style={{ margin: '0 4px' }}> </span><p>{formData.phoneNumber !== "" && "|"} {formData.phoneNumber}</p><span style={{ margin: '0 4px' }}> </span><p>{formData.address !== "" && "|"} {formData.address}</p>
                </div>
                
            </div>

            {formData.name && <hr style={{ marginTop: '-10px'}}/>}

            

            <div className="work-experience">
                {workData.companyName !== "" && <h2 style={{ textAlign: 'left' }}>Work Experience</h2>}
                {workData.companyName !== "" && <hr />}
                <div className="work-container" style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{ textAlign: 'left', fontWeight: 'bold'}}>{workData.companyName}</p>
                    <div className="work-date" style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>{workData.workStart}</p>
                        {workData.workStart != '' && (
                            <span style={{ margin: '0 4px' }}>-</span>
                        )}
                        <p style={{ fontWeight: 'bold' }}>{workData.workEnd}</p>
                    </div>
                </div>
                
                <div className="work-city mt-1" style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{ textAlign: 'left', fontSize: 14, fontStyle: 'italic'}}>{workData.position}</p>
                    <p style={{ fontStyle: 'italic', fontSize: 14 }}>{workData.city}</p>
                </div>

                 {workData.bullets[0] !== "" && workData.bullets.map((bullet, index) => (
                    <ul className="mt-1 list-disc px-4" key={index}>
                        <li className="text-left">{bullet}</li>
                    </ul>
                ))} 
                

                
            </div>

            <div className="education">
               {educationData.universityName && <h2 style={{ textAlign: 'left' }}>Education</h2>}
               {educationData.universityName && <hr />}
               <div className="uni-container" style={{ display: 'flex', justifyContent: 'space-between'}}>
                <p style={{ fontWeight: 'bold'}}>{educationData.universityName}</p>
                <div className="uni-date" style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold' }}>{educationData.startDate}</p>
                    {educationData.startDate != '' && (
                        <span style={{ margin: '0 4px' }}>-</span>
                    )}
                    
                    <p style={{ fontWeight: 'bold' }}>{educationData.graduationDate}</p>
                </div>
                
               </div>
                
                <div className="uni-location" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-10px' }}>
                    <p style={{ fontStyle: 'italic', fontSize: 14, marginTop: '10px'}}>{educationData.universityProgram}</p>
                    <p style={{ fontStyle: 'italic', fontSize: 14}}>{educationData.city}</p>
                </div>

                
                {educationData.bullets[0] !== "" && educationData.bullets.map((bullet, index) => (
                    <ul key={index} className="list-disc px-4">
                        <li style={{ textAlign: 'left' }}>{bullet}</li>
                    </ul>
                ))}
                
            </div>

            <div className="skills">
                {(skillData.technicalSkills.length > 0 || skillData.professionalSkills.length > 0) && <h2 style={{ textAlign: 'left' }}>Skills</h2>}
                {(skillData.technicalSkills.length > 0 || skillData.professionalSkills.length > 0) && <hr />}

                <div className="technical-container flex">
                    {skillData.technicalSkills.length > 0 && <p className="font-bold mr-2">Technical Skills: </p>}
                    {skillData.technicalSkills.map((skill, index) => (
                        <span key={index} className="mr-1">{skill} {index !== skillData.technicalSkills.length - 1 && ','} </span>
                    ))}
                </div>

                <div className="professional-container flex">
                    {skillData.professionalSkills.length > 0 && <p className="font-bold mr-2">Professional Skills: </p>}
                    {skillData.professionalSkills.map((skill, index) => (
                        <span key={index} className="mr-1">{skill} {index !== skillData.professionalSkills.length - 1 && ','} </span>
                    ))}
                </div>
                
                
            </div>
            
            

        </div>
        
    )
}

export default CV