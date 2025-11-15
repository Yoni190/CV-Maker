import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

function CV ({formData, educationData, workData, skillData}) {

    const cvRef = useRef()


    const downloadPDF = async () => {
        const element = cvRef.current

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true
        })

        const imgData = canvas.toDataURL("image/png")

        const pdf = new jsPDF("p", "mm", "a4")
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()

        const imgProps = pdf.getImageProperties(imgData)
        const ratio = imgProps.height / imgProps.width

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfWidth * ratio)
        pdf.save("cv.pdf")

    }
  
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1>CV</h1>
                <button className="bg-green-600 text-white p-2 rounded-sm" onClick={downloadPDF}>Download</button>
            </div>

            <div ref={cvRef} className="p-3">
            
                <div className="personalInfo">
                    <h3 style={{ textAlign: 'left', fontSize: '24px', marginBottom: 0}}>{formData.name}</h3>
                    <div className="contact-data" style={{display: 'flex', marginBottom: '10px'}}>
                        <p>{formData.email}</p><span style={{ margin: '0 4px' }}> </span><p>{formData.phoneNumber !== "" && "|"} {formData.phoneNumber}</p><span style={{ margin: '0 4px' }}> </span><p>{formData.address !== "" && "|"} {formData.address}</p>
                    </div>
                    
                </div>

                {formData.name && <hr style={{ marginTop: '-5px'}}/>}

                {workData.companyName.at(-1) && <h2 style={{ textAlign: 'left' }}>Work Experience</h2>}
                {workData.companyName.at(-1) && <hr className="mt-2"/>}

                {workData.companyName.map((work, index) => (
                    <div className="work-experience" key={index}>
                        <div className="work-container" style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <p style={{ textAlign: 'left', fontWeight: 'bold'}}>{work}</p>
                            <div className="work-date" style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontWeight: 'bold' }}>{workData.workStart[index]}</p>
                                {workData.workStart[index] != '' && (
                                    <span style={{ margin: '0 4px' }}>-</span>
                                )}
                                <p style={{ fontWeight: 'bold' }}>{workData.workEnd[index]}</p>
                            </div>
                        </div>
                        
                        <div className="work-city mt-1" style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <p style={{ textAlign: 'left', fontSize: 14, fontStyle: 'italic'}}>{workData.position[index]}</p>
                            <p style={{ fontStyle: 'italic', fontSize: 14 }}>{workData.city[index]}</p>
                        </div>

                        {workData.bullets[index][0] !== "" && workData.bullets[index].map((bullet, bulletIndex) => (
                            <ul className="mt-1 list-disc px-4" key={bulletIndex}>
                                <li className="text-left">{bullet}</li>
                            </ul>
                        ))} 
                        

                        
                    </div>
                ))}
                

                {educationData.universityName.at(-1) && <h2 style={{ textAlign: 'left' }}>Education</h2>}
                {educationData.universityName.at(-1) && <hr className="mt-2"/>}
                {educationData.universityName.map((university, index) => (
                    <div className="education" key={index}>
                    
                    <div className="uni-container" style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{ fontWeight: 'bold'}}>{university}</p>
                        <div className="uni-date" style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold' }}>{educationData.startDate[index]}</p>
                            {educationData.startDate != '' && (
                                <span style={{ margin: '0 4px' }}>-</span>
                            )}
                            
                            <p style={{ fontWeight: 'bold' }}>{educationData.endDate[index]}</p>
                        </div>
                        
                    </div>
                        
                        <div className="uni-location" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-10px' }}>
                            <p style={{ fontStyle: 'italic', fontSize: 14, marginTop: '10px'}}>{educationData.universityProgram[index]}</p>
                            <p style={{ fontStyle: 'italic', fontSize: 14}}>{educationData.city[index]}</p>
                        </div>

                        
                        {educationData.bullets[index][0] !== "" && educationData.bullets[index].map((bullet, bulletIndex) => (
                            <ul key={bulletIndex} className="list-disc px-4">
                                <li style={{ textAlign: 'left' }}>{bullet}</li>
                            </ul>
                        ))}
                        
                    </div>
                ))}
                

                <div className="skills">
                    {(skillData.technicalSkills.length > 0 || skillData.professionalSkills.length > 0) && <h2 style={{ textAlign: 'left' }}>Skills</h2>}
                    {(skillData.technicalSkills.length > 0 || skillData.professionalSkills.length > 0) && <hr className="mt-2"/>}

                    <div className="technical-container flex flex-wrap">
                        {skillData.technicalSkills.length > 0 && <p className="font-bold mr-2">Technical Skills: </p>}
                        {skillData.technicalSkills.map((skill, index) => (
                            <span key={index} className="mr-1">{skill} {index !== skillData.technicalSkills.length - 1 && ','} </span>
                        ))}
                    </div>

                    <div className="professional-container flex flex-wrap">
                        {skillData.professionalSkills.length > 0 && <p className="font-bold mr-2">Professional Skills: </p>}
                        {skillData.professionalSkills.map((skill, index) => (
                            <span key={index} className="mr-1">{skill} {index !== skillData.professionalSkills.length - 1 && ','} </span>
                        ))}
                    </div>
                    
                    
                </div>
            
            </div>

        </div>
        
    )
}

export default CV