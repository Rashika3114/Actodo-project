import Header from "../component/Header"
import Card from "../component/Card"
import Todo from "../component/Todo"
import { useLocation } from "react-router-dom"

function Landing()
{

    const data =useLocation()
    
    return(
        <div className="bg-black p-16">
            <div className="bg-white p-10 border rounded-md">
                <Header name={data.state.user}/>
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"red"} title={"December 20"} subtitle={"14:23:00"} />
                    <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
                </div>
                <Todo/>
               
            </div>


        </div>
    )
} 
export default Landing