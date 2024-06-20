import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate =useNavigate()
    const [eusername, seteusername] = useState()
    const [epass, setepass] = useState()
    const [ruser, setruser] = useState(true)


    const users = props.users

    function handleUinput(evt) {
        seteusername(evt.target.value)


    }
    function handlePinput(evt) {
        setepass(evt.target.value)

    }
    var userfound = false


    const checkUser = () => {
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epass) {
                userfound=true
                navigate("/landing",{state:{user:eusername}})
            }
           
        })
        if(userfound===false)
            {
                console.log("login failed")
                setruser(false)
            }


    }


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                {
                    ruser ? <p>I help you manage your activities after you login  :)</p> : <p className="text-red-500"> Please Signup Before you login</p>
                }



                <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handleUinput} value={eusername}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username">

                    </input>
                    <input type="text" onChange={handlePinput} value={epass}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password">

                    </input>

                    <button onClick={checkUser} className="bg-[#8272DA] w-24 P-1 rounded-md">
                        Login
                    </button>
                    <p>Don't have an account? | <Link to={"/signup"} className="underline">Signup</Link></p>
                </div>

            </div>
        </div>
    )
}
export default Login