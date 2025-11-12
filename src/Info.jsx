function Info({ labelName, inputType="text", inputName, value, onChangeText, placeholder = '' }) {
    const inputStyle = {
        padding: '5px',
        borderRadius: '5px'
    }
    return (
        <>
            <label htmlFor={inputName}>{labelName}</label>
            <input className="p-2 border rounded-md" 
            type={inputType} 
            name={inputName} 
            id={inputName} 
            value={value} 
            onChange={onChangeText} 
            placeholder={placeholder === '' ? labelName : placeholder} />
        </>
    )
}

export default Info