import React from 'react'
import bg from '../../assets/bgAuth.png'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className="flex justify-center lg:my-20 mt-28 mb-3 lg:w-auto w-[90%">

            <div className="lg:h-[528px] h-auto lg:min-w-[650px] lg:max-w-[750px]    flex shadow-md bg-white box-border">
                <div
                    className="bg-[#2874f0] py-10 px-8 w-[40%] text-white lg:block hidden"
                    style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center 85%' }}
                >
                    <span className="text-3xl font-medium">Looks like you're new here!</span>
                    <p className="text-lg leading-[150%] mt-4">Sign up with your mobile number to get started</p>
                </div>

                <div className="pt-14 lg:px-9 pb-4 mx-auto w-[60%] box-border">
                    <form action="" className="lg:mx-5 mx-0">
                        <div className="w-full mb-6 text-base flex">
                            <input
                                className="w-full outline-none border-b-2 border-black placeholder:text-black placeholder:font-semibold py-2 mr-2"
                                placeholder='First Name'
                                type="text"
                                name=""
                            />
                            <input
                                className="w-full outline-none border-b-2 border-black placeholder:text-black placeholder:font-semibold py-2 ml-2"
                                placeholder='Last Name'
                                type="text"
                                name=""
                            />
                        </div>
                        <div className="w-full mb-6 text-base ">
                            <input
                                className="w-full outline-none border-b-2 border-black placeholder:text-black placeholder:font-semibold py-2"
                                placeholder='Email'
                                type="email"
                                name=""
                            />
                        </div>
                        <div className="w-full mb-6 text-base ">
                            <input
                                className="w-full outline-none border-b-2 border-black placeholder:text-black placeholder:font-semibold py-2"
                                placeholder='Password'
                                type="email"
                                name=""
                            />
                        </div>
                        <div className="font-normal text-[#878787] text-xs mb-10">
                            <p>By continuing, you agree to Flipkart's <span className="text-[#2874f0]">Terms of use</span> and <span className="text-[#2874f0]">Privacy Policy.</span></p>
                        </div>
                        <div className="mx-auto">
                            <button className="bg-[#fb641b] w-full text-white h-12 font-bold text-base">Login</button>
                        </div>
                    </form>

                    <div className="text-center mt-20">
                        <Link
                            to={"/login"}
                            className="text-[#2874f0] "
                        >
                            Existing User? Login
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Register