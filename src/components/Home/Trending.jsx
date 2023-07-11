import React from 'react'
import bg from '../../assets/bg-trending.webp'
import { TrendingData } from '../../data'

const TrendingProductCard = (props) => {
    const { imgUrl, title, pricing, brands } = props;
    return (
        <div className="text-center inline-block py-4 px-2">
            <div className="object-contain lg:hover:scale-110 mx-auto lg:w-[200px] w-20 "><img src={imgUrl} alt="" /></div>
            <div className="font-semibold lg:pt-2 pt-1 text-sm lg:text-base">{title}</div>
            <div className="text-[#388e3c] lg:pt-2 pt-1 text-xs lg:text-sm">{pricing}</div>
            <div className="tracking-tighter text-[#151515] text-xs lg:text-sm text-ellipsis lg:pt-2 pt-1">{brands}</div>
        </div>

    )
}


const Trending = () => {
    return (
        <div className="w-[98%] mx-auto flex bg-white shadow-md">
            <div
                className="text-center min-w-[230px] lg:flex hidden"
                style={{ backgroundImage: `url(${bg})`, backgroundPosition: '0px bottom', backgroundRepeat: 'no-repeat' }}
            >
                <div className="mb-24 mx-5 mt-10">
                    <div className="lg:text-3xl text-xs text-center">Best of Electronics</div>
                    <button className="py-3 px-5 bg-[#2874f0] inline-block rounded-sm text-white font-normal my-10">View All</button>
                </div>

            </div>
            {/* slides */}
            <div className="mx-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap ">
                {TrendingData && TrendingData.map((item, i) => (
                    <TrendingProductCard
                        imgUrl={item.imgUrl}
                        title={item.title}
                        pricing={item.pricing}
                        brands={item.brands}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default Trending     