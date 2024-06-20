import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, seteusername] = useState()
    const [epass, setepass] = useState()

    function handleUinput(evt) {
        seteusername(evt.target.value)


    }
    function handlePinput(evt) {
        setepass(evt.target.value)

    }
    function adduser() {
        setusers([...users, { username: eusername, password: epass }])
        navigate("/")
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                <p>Sign up Here :)</p>


                <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handleUinput}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username">

                    </input>
                    <input type="text" onChange={handlePinput}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password">

                    </input>
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="confirm password">

                    </input>
                    <button className="bg-[#FCA201] w-24 P-1 rounded-md" onClick={adduser}>
                        Sign Up
                    </button>
                    <p>Already have an account? | <Link to={"/"} className="underline">Login</Link></p>
                </div>

            </div>
        </div>
    )
}
export default Signup
