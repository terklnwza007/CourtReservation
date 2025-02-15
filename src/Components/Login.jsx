import { useState } from "react";
import axios from 'axios';


export default function Login() {


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3000/login",{
            username : username,
            password: password,
        })

        setUserName("");
        setPassword("");
    }


    return (
        <div className="h-screen overflow-auto">
            <div className=" flex flex-col bg-white justify-center items-center h-screen">
                <div
                    className="bg-white text-gray-800 pt-3 pb-[5rem] rounded-2xl border-2 max-w-md text-center space-y-5 border-gray-300">
                    <div>
                        <h1 className="font-bold text-3xl">Login</h1>
                    </div>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <input className="border-2 w-[20rem] p-2 rounded-lg pt-3 pb-3"
                               type="text"
                               placeholder="Username"
                               value={username}
                               onChange={(e) => setUserName(e.target.value)}
                        />
                        <input className="border-2 w-[20rem] p-2 rounded-lg pt-3 pb-3"
                               type="password"
                               placeholder="Password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleSubmit}
                                className="border-2 w-[20rem] p-2 rounded-lg text-white bg-[#264DCB] pt-3 pb-3">Login
                        </button>
                    </form>

                    <button
                        className="border-2 w-[20rem] p-2 rounded-lg pt-3 pb-3">
                        <div className="flex flex-row items-center justify-center space-x-1">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                      d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                                      clip-rule="evenodd"/>
                            </svg>
                            <h1>Sign in with Google</h1>
                        </div>
                    </button>
                    <p>Don't have an account? <a className="text-[#1F4CFF] underline" href="#">Sign up</a></p>

                </div>
            </div>
        </div>
    )

}