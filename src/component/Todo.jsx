import Addtodo from "./Addtodo"
import { useState } from "react"
import Todolist from "./Todolist"

function Todo() {
    const[act,setact]=useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"have a nice day"
        }
    ])
    return (
        <div>
            <div className="flex flex-wrap gap-5">
                <Addtodo act={act} setact={setact} />
                <Todolist  act={act} setact={setact}/>
            </div>

        </div>
    )

}
export default Todo