import React from "react";
import logoCareLink from "../assets/images/logo/logo-care-link.png"

const Login = () => {
    return (
        <>
            <div className="min-h-screen bg-hero-pattern bg-center bg-cover flex justify-center items-center">
                <div className="bg-white/50 rounded-3xl p-5">
                    <div className="flex justify-center">
                        <img className="w-[200px]" src={logoCareLink} alt="logo-care-link" />
                    </div>
                    <form className="flex flex-col mt-14" action="">
                        <label className="font-bold mb-1.5" htmlFor="username">Nama Akun</label>
                        <input className="rounded-md px-2 h-11 w-96 mb-4" type="text" name="username" />
                        <label className="font-bold mb-1.5" htmlFor="password">Password</label>
                        <input className="rounded-md px-2 h-11 w-96 mb-8" type="text" name="password" />
                        <button className="bg-button text-white p-3 rounded-md">Login</button>
                    </form> 
                </div>
            </div>
        </>
    )
}

export default Login;