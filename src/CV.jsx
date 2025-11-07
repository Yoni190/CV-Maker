function CV ({formData}) {
    return (
        <div>
            <h1>CV</h1>
            <h3>{formData.name}</h3>
            <p>{formData.email}</p>
            <p>{formData.phoneNumber}</p>
            <p>{formData.description}</p>

        </div>
        
    )
}

export default CV