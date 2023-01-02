
import Link from "next/link"
import { useState } from "react"

const signup = () => {

    const [data, setData] = useState({ name: '', mobile: '', email: '', password: '' })


    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const clickHandler = (e) => {
        e.preventDefault()
        console.log(data)
        setData({ name: '', mobile: '', email: '', password: '' })
    }


    return (
        <div className=" w-1/2 mx-auto mt-4 text-center">

            <form className="shadow-lg shadow-indigo-500/40 border-2 border-[#1D4ED8] max-w-[400px] mx-auto text-start p-3 rounded">
                <h2 className="text-2xl mb-4 text-[#1D4ED8]">Create Account</h2>

                <label htmlFor="name" className="cursor-pointer text-sm mb-4">Your name</label><br />
                <input type='text' className='w-full border-2 p-1 mb-1' id="name" name="name" placeholder="first and last name" onChange={inputHandler} value={data.name} />
                <br />

                <label htmlFor="mobile" className="cursor-pointer text-sm mb-4">Mobile number</label><br />
                <input type='number' className='w-full border-2 p-1 mb-1' id="mobile" name="mobile" placeholder="mobile number" onChange={inputHandler} value={data.mobile} />
                <br />

                <label htmlFor="email" className="cursor-pointer text-sm mb-4">Email</label><br />
                <input type='email' className='w-full border-2 p-1 mb-1' id="email" name="email" placeholder="email..." onChange={inputHandler} value={data.email} />
                <br />

                <label htmlFor="password" className="cursor-pointer text-sm mb-4">Password</label><br />
                <input type='password' className='w-full border-2 p-1 mb-1' id="password" name="password" placeholder="password" onChange={inputHandler} value={data.password} />

                <button className='bg-[#1D4ED8] w-full my-5 py-2 text-lg text-white shadow-lg shadow-blue-500/50' onClick={clickHandler}>create account</button>
                <p>Already have an account? <Link href={'#'} className='text-[#1D4ED8] hover:border-b border-[#1D4ED8]'>Sign in</Link></p>
            </form>
        </div>
    )
}

export default signup