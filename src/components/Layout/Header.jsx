import React, { useState } from 'react'
import logo from '../../assets/flipkart-logo.png'
import plus from '../../assets/plus-flipkart.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaShoppingCart, FaBars, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from '../../container/Search'



const Header = ({ isAuthenticated, user }) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        return setClick(!click);
    }

    return (
        <header className="w-full bg-[#2874f0] lg:h-[56px] h-[100px] fixed top-0 z-10 ">
            <div className="flex  lg:w-full lg:justify-center lg:m-[auto] h-full items-center max-w-7xl -mt-5">

                <div className="lg:hidden visible ml-6 mx-2">{<FaBars size={20} color='white' />}</div>
                {/* Logo */}
                <div className="mx-3">
                    <Link to={"/"}>
                        <div className="justify-center font-bold text-[11px]">
                            <a href="#">
                                <img src={logo} alt="" className="w-[75px] block" />
                            </a>
                            <a href="#" className="italic text-[#F0F0F0] flex items-center">
                                Explore&nbsp;
                                <span className=" text-[#ffe500]">Plus</span>
                                <img
                                    src={plus}
                                    className="w-[10px] h-[10px] mx-1"
                                />
                            </a>
                        </div>
                    </Link>
                </div>

                {/* Search */}
                <Search />

                {/* login */}
                {isAuthenticated ? (
                    <>
                        <div
                            className="bg-white rounded-[100%] cursor-pointer lg:static absolute right-14">
                            <Link to={"/"}>
                                <FaUserCircle size={35} color='#878787' />
                            </Link>
                        </div>

                        {/* <div className="">
                            <ul>
                                <li>sdsjds</li>
                                <li>sdsff</li>
                                <li>sdfdsf</li>
                            </ul>
                        </div> */}
                    </>
                ) : (
                    <div
                        className="lg:bg-white bg-none mx-3 py-1 px-10 rounded-[2px] cursor-pointer h-9 lg:static absolute right-2">
                        <Link
                            to={"/login"}
                            className="font-bold lg:text-[#2874f0] text-white text-[16px]">
                            Login
                        </Link>
                    </div>
                )}



                {/* Become a seller */}
                <div className="mx-3 max-w-[150px] lg:block hidden">
                    <a href="" className="text-white text-[16px] font-bold">
                        Become a Seller
                    </a>
                </div>

                {/* more */}
                <div className="mx-3 flex items-center text-white font-bold text-[16px] max-w-[150px] hidden lg:contents">
                    More {<MdKeyboardArrowDown size={20} className="mt-1" />}
                </div>

                {/* cart */}
                <Link to={'/me/cart'}>
                    <div className="mx-3 flex text-white font-bold items-center gap-1 max-w-[150px] right-2 absolute lg:static">
                        {<FaShoppingCart size={20} />} <span className="lg:block hidden">Cart</span>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header