import React, { useState } from 'react'
import bg from '../../assets/bgAuth.png'
import { Link, redirect, } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/UserActions.js'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));

        console.log(email, password);
    }

    return (

        <div className="flex justify-center lg:my-20 mt-28 mb-3 lg:w-auto w-[90%">

            <div className="lg:h-[528px] h-auto lg:min-w-[650px] lg:max-w-[750px]    flex shadow-md bg-white box-border">
                <div
                    className="bg-[#2874f0] py-10 px-8 w-[40%] text-white lg:block hidden"
                    style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center 85%' }}
                >
                    <span className="text-3xl font-medium">Login</span>
                    <p className="text-lg leading-[150%] mt-4">Get acces to your Orders, Whishlist and Recommendation</p>
                </div>

                <div className="pt-14 lg:px-9 pb-4 mx-auto w-[60%] box-border">
                    <form onSubmit={submitHandler} className="lg:mx-5 mx-0">
                        <div className="w-full mb-6 text-base ">
                            <input
                                className="w-full outline-none border-b-2 border-black placeholder:text-black placeholder:font-semibold py-2"
                                placeholder='Email'
                                type="email"
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                            {/* <label
                                className="absolute top-0 left-0 pointer-events-none"
                            >
                                Email
                            </label> */}
                        </div>
                        <div className="w-full mb-6 text-base ">
                            <input
                                className="w-full outline-none border-b-2 border-black placeholder:text-black placeholder:font-semibold py-2"
                                placeholder='Password'
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                name="password"
                            />
                        </div>
                        <div className="font-normal text-[#878787] text-xs mb-10">
                            <p>By continuing, you agree to Flipkart's <span className="text-[#2874f0]">Terms of use</span> and <span className="text-[#2874f0]">Privacy Policy.</span></p>
                        </div>
                        <div className="mx-auto">
                            <button
                                type='submit'
                                className="bg-[#fb641b] w-full text-white h-12 font-bold text-base">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="text-center lg:mt-44 mt-20">
                        <Link
                            to={"/register"}
                            className="text-[#2874f0] "
                        >
                            New to Flipkart? Create an account
                        </Link>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Login