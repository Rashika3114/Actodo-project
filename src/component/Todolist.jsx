
import Todoitem from "./Todoitem"

function Todolist(props)
{
    const act= props.act
    const setact=props.setact

    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        
        {act.length===0?<p>you haven't added anything yet</p>:""}
        {
            act.map(function(item,index)
        {
            return <Todoitem id={item.id} activity={item.activity} index={index} act={act} setact={setact}/>
        })
        }
    </div>
    )
}
export default Todolist