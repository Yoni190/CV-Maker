import Info from "./Info"

function Skill() {
    const addSkill = () => {
        console.log('added')
    }
    
    return (
        <div className="flex flex-col">
            <label htmlFor="technical">Technical Skills</label>
            <div className="technical-container flex">
                <input className="p-2 border rounded-md flex-1" type="text" name="technical" id="technical" placeholder="Ruby, PHP, Node.JS..."/>
                <button className="border px-4 rounded-lg text-white bg-gray-900" onClick={addSkill}>+</button>
            </div>
        </div>
    )
}

export default Skill