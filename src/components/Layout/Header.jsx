import React from 'react'
import logo from '../../assets/flipkart-logo.png'
import plus from '../../assets/plus-flipkart.png'
import { BiSearch } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'


const Header = () => {
    return (
        <header className="w-full bg-[#2874f0] h-[56px] sticky z-10">
            <div className="flex w-full justify-center mt-0 m-[auto] h-full items-center max-w-7xl">
                {/* Logo */}
                <div className="mx-3">
                    <div className="justify-center font-bold text-[11px]">
                        <a href="#">
                            <img src={logo} alt="" className="w-[75px] block" />
                        </a>
                        <a href="#" className="italic text-[#F0F0F0] flex items-center">
                            Explore&nbsp;<span className=" text-[#ffe500]">Plus</span><img src={plus} alt="" className="w-[10px] h-[10px] mx-1" />
                        </a>
                    </div>
                </div>
                {/* Search */}
                <div className=" shadow-xs mx-3">

                    <form action="" className="w-full h-[36px] min-w-[564px] relative items-center inline-block">
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
                <div className="bg-white mx-3 py-1 px-10 rounded-[2px] cursor-pointer">
                    <a href="/" className="font-bold text-[#2874f0] text-[16px]">
                        Login
                    </a>
                </div>
                {/* Become a seller */}
                <div className="mx-3 max-w-[150px]">
                    <a href="" className="text-white text-[16px] font-bold">
                        Become a Seller
                    </a>
                </div>
                {/* more */}
                <div className="mx-3 flex items-center text-white font-bold text-[16px] max-w-[150px]">
                    More {<MdKeyboardArrowDown size={20} className="mt-1" />}
                </div>
                {/* cart */}
                <div className="mx-3 flex text-white font-bold items-center gap-1 max-w-[150px]">
                    {<FaShoppingCart size={20} />} Cart
                </div>
            </div>
        </header>
    )
}

export default Header