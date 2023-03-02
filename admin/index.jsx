import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UseUserAuth } from '@/Context/UserAuth';
import { useRouter } from 'next/router';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [forgetEmail, setForgetEmail] = useState("")
    const [fotgetPassword, setForgetPassword] = useState(true)
    const { signIn, forgetPassword, user } = UseUserAuth()

    const router = useRouter()
    useEffect(() => {
        if (user) {
            router.push('/dashboard')
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(email, password)
            router.push('/dashboard')
        } catch (error) {
            console.log("Error")
        }
    }

    const forgetHandleSubmit = async (e) => {
        e.preventDefault()
        try {
            await forgetPassword(forgetEmail)
            setForgetPassword(true)
        } catch (error) {
            console.log("Error")
        }
    }

    return (
        <>
            <Head>
                Admin Panel
            </Head>
            <nav className="py-4 w-full fixed-top flex justify-center">
                <img src="/images/logo.png" className="w-16 h-16" />
            </nav>

            <div className="grid grid-cols-2 place-content-center h-screen lg:px-20 md:px-12 px-6">
                <div className="lg:col-span-1 col-span-2 flex flex-col justify-center items-center">
                    {
                        fotgetPassword ?
                            <div className="lg:w-3/4 w-full trhide">
                                <h1 className="text-4xl text-white pb-2 lg:text-left text-center">
                                    Login
                                </h1>
                                <p className="text-xs text-white pb-2 lg:text-left text-center">
                                    Enter your credentials to access your account
                                </p>
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="email" className="text-sm text-white pb-2 pl-1">Email</label>
                                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" placeholder="Enter your email" className="text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-1" />
                                    <label htmlFor="password" className="text-sm text-white pb-2 pl-1">Password</label>
                                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" placeholder="Enter your password" className="text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-1" />
                                    <div className="flex justify-end py-2">
                                        <button onClick={() => setForgetPassword(false)} className="text-xs text-primary-1">
                                            Forget Password
                                        </button>
                                    </div>
                                    <button onClick={handleSubmit} type="button" className="text-base p-2 bg-primary-1 text-zinc-800 rounded shadow-sm mt-2">
                                        Login
                                    </button>
                                </div>
                            </div>
                            :
                            <div className="lg:w-3/4 w-full trshow">
                                <button onClick={() => setForgetPassword(true)} type="button" className="flex items-center gap-2 text-base text-primary-1 py-2">
                                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                                    <p className="">Back to Login</p>
                                </button>
                                <h1 className="text-4xl text-white pb-2 lg:text-left text-center">
                                    Forget Password
                                </h1>
                                <p className="text-xs text-white pb-2 lg:text-left text-center">
                                    Enter your email to reset your password
                                </p>
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="email" className="text-sm text-white pb-2 pl-1">Email</label>
                                    <input onChange={(e) => { setForgetEmail(e.target.value) }} type="email" id="email" placeholder="Enter your email" className="text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-1" />
                                    <button type="button" onClick={forgetHandleSubmit} className="text-base p-2 bg-primary-1 text-zinc-800 rounded shadow-sm mt-2">
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                    }
                </div>
                <div className="col-span-1 lg:flex hidden justify-center items-center">
                    <img src="/images/VectorOne.svg" />
                </div>
            </div>

        </>
    );
};