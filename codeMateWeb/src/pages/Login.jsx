import React from 'react'

const Login = () => {
    return (
        <>
            <div className=' h-screen bg-gray-100'>
                <h1 className='text-center text-[28px] pb-[30px] pt-[60px]'>Welcome to CODEMATE</h1>
                <div className='flex justify-center items-center'>
                    <div className="card lg:card-side bg-base-100 shadow-sm w-2/3">
                        <figure className='w-[500px] px-[40px]'>
                            <img
                                src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">First Name</legend>
                                <input type="text" className="input w-full" placeholder="Type here" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Last Name</legend>
                                <input type="text" className="input w-full" placeholder="Type here" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Email</legend>
                                <input type="email" className="input w-full" placeholder="Type here" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Age</legend>
                                <input type="number" className="input w-full" placeholder="Type here" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Gender</legend>
                                <select defaultValue="Pick a browser" className="select w-full">
                                    <option disabled={true}>Pick a gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </fieldset>
                            <button className="btn bg-black text-white border-black">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
