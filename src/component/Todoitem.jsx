function Todoitem(probs) {
    const act = probs.act
    const setact = probs.setact

    const handledelete = (remove) => {
        var temparr = act.filter(function(item){
            if(item.id === remove){
                return false
            }
            else{
                return true
            }
        })
        setact(temparr)

    }



    return (
        <div className="flex justify-between">
            <p>{probs.index + 1}.{probs.activity}</p>
            <button onClick={() => {handledelete(probs.id) }} className="text-red-500">DELETE</button>

        </div>
    )

}
export default Todoitem