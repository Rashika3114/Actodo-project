import { useState } from "react"

function Addtodo(props) {
    const act = props.act
    const setact = props.setact

    const [newactivity, setnewactivity] = useState("")

    const handlechange = (evt) => {
        setnewactivity(evt.target.value)
    }
    const clicked = () => {
        setact([...act, { id: act.length + 1, activity: newactivity }])
        setnewactivity("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input type="text" value={newactivity} onChange={handlechange} className="border border-black p-1 bg-transparent" placeholder="Next Activity?"></input>
                <button onClick={clicked} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    )

}
export default Addtodo