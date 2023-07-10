import React from 'react'
import logo from '../../assets/flipkart-logo.png'
import plus from '../../assets/plus-flipkart.png'
import { BiSearch } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaShoppingCart, FaBars } from 'react-icons/fa'


const Header = () => {
    return (
        <header className="w-full bg-[#2874f0] lg:h-[56px] h-[100px] fixed top-0 z-10">
            <div className="flex  lg:w-full lg:justify-center lg:m-[auto] h-full items-center max-w-7xl -mt-5">

                <div className="lg:hidden visible ml-6 mx-2">{<FaBars size={20} color='white' />}</div>
                {/* Logo */}
                <div className="mx-3">
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
                </div>

                {/* Search */}
                <div className="lg:w-auto w-[100%] shadow-xs px-4 lg:px-0 mx-3 lg:static absolute top-14 -right-3">

                    <form action="" className="w-full h-[36px] lg:min-w-[564px] relative items-center inline-block">
                        <div className="flex relative bg-white w-full">
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    placeholder='Search for product and more'
                                    className="w-full h-full py-1 px-4"
                                />
                            </div>
                            <button
                                className="p-2"
                            >
                                {<BiSearch size={20} color='#2874f0' fontWeight={500} />}
                            </button>
                        </div>
                    </form>

                </div>

                {/* login */}
                <div className="lg:bg-white bg-none mx-3 py-1 px-10 rounded-[2px] cursor-pointer h-9 lg:static absolute right-2">
                    <a href="/" className="font-bold lg:text-[#2874f0] text-white text-[16px]">
                        Login
                    </a>
                </div>

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
                <div className="mx-3 flex text-white font-bold items-center gap-1 max-w-[150px] right-2 absolute lg:static">
                    {<FaShoppingCart size={20} />} <span className="lg:block hidden">Cart</span>
                </div>
            </div>
        </header>
    )
}

export default Header