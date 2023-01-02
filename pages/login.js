
import { useState } from "react"

const login = () => {
    const [loginData, setLoginData] = useState({ email: '', password: '' });


    const changeHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const loginHandler = (e) => {
        e.preventDefault()

        console.log(loginData)
    }


    return (
        <div className=" w-1/2 mx-auto mt-4 text-center">

            <form className="shadow-lg shadow-indigo-500/40 border-2 border-[#1D4ED8] max-w-[400px] mx-auto text-start p-3 rounded">
                <h2 className="text-2xl mb-4 text-[#1D4ED8]">Sign in</h2>

                <label className="cursor-pointer text-lg mb-3">Email:-
                    <br />
                    <input type='email' name='email'
                        onChange={changeHandler}
                        className='w-full border-2 p-1'
                    />
                </label>
                <br />
                <label className="cursor-pointer text-lg mb-3">Password:-
                    <br />
                    <input type='text' name='password' onChange={changeHandler}
                        className='w-full border-2 p-1' />
                </label>
                <br />
                <button onClick={loginHandler} className='bg-[#1D4ED8] w-full my-5 py-2 text-lg text-white shadow-lg shadow-blue-500/50'>Sign in</button>

            </form>
            <button onClick={loginHandler} className='bg-[#E1E4EA] mt-10 py-1 px-16 text-sm hover:bg-slate-500 duration-500'>Create your Amejona account </button>
        </div>
    )
}

export default login