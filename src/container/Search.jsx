import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
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
    )
}

export default Search