import { useState } from 'react'
import Info from './Info'

function Personal({formData, setFormData}) {

    const container = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        boxShadow:  '5px 5px 10px rgba(0, 0, 0, 0.2)',
        padding: '15px'
    }

    const onChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    return (
        <div style={container}>
            <h2 style={{textAlign: 'left'}}>Personal Information</h2>
            <Info labelName="Full Name" inputName="name" value={formData.name} onChangeText={onChange}/>
            <Info labelName="Email" inputType="email" inputName="email" value={formData.email} onChangeText={onChange}/>
            <Info labelName="Phone Number" inputName="phoneNumber" value={formData.phoneNumber} onChangeText={onChange}/>
            <Info labelName="Address" inputName="address" value={formData.address} onChangeText={onChange}/>
            
            
            
        </div>
    )
}


export default Personal