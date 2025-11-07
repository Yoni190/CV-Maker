function Info({ labelName, inputType="text", inputName, value, onChangeText }) {
    const inputStyle = {
        padding: '5px',
        borderRadius: '5px'
    }
    return (
        <>
            <label htmlFor={inputName}>{labelName}</label>
            <input style={inputStyle} type={inputType} name={inputName} id={inputName} value={value} onChange={onChangeText} placeholder={labelName} />
        </>
    )
}

export default Info