import React from 'react'
import product from '../../assets/product.webp'
import { BsHeartFill, BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    const { productName, description, rating, reviews, price, _id } = props.product;

    const deliveryDay = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[(new Date().getDay() + 3) % 7];
    }

    const discountPrice = (initialPrice) => {
        return (36 / 100) * initialPrice;
    }


    return (
        <>
            <div className="lg:pl-6 lg:pt-6 lg:pb-7 pl-3 pt-3 pb-4 border-b">
                <Link to={`/productDetails/${_id}`} className="flex">
                    <div className="lg:w-[200px] relative">
                        <div className="lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]">
                            <img
                                className="h-full m-auto"
                                src={product}
                                alt="" />
                        </div>
                        <div className="mx-auto mt-4 lg:px-4 lpx-2 block whitespace-nowrap">
                            <input className="cursor-pointer" type="checkbox" id="compare" /> <label htmlFor="compare" className="lg:ml-2 lg:text-sm text-xs cursor-pointer">Add to Compare</label>
                        </div>
                        <div className="absolute top-1 inline-block right-0">
                            <BsHeartFill size={15} color='#c2c2c2' />
                        </div>
                    </div>
                    {/* Details */}
                    <div className="pl-6 lg:w-[calc(100%-200px)] flex lg:flex-row flex-col">
                        <div className="lg:w-[58.33%]">
                            <div className="lg:text-lg text-xs font-medium ">{productName}</div>
                            <div className="flex mt-2">
                                <span className="">
                                    <div className="bg-[#388e3c] text-white flex items-center gap-1 py-1 px-2 rounded-[3px] text-xs font-medium">{rating}<BsStarFill size={10} /> </div>
                                </span>
                                <span className="text-[#878787] font-medium pl-2 flex">1,234,3234 <span className="lg:block hidden">&nbsp;Rating & {reviews.length} Reviews</span></span>
                            </div>
                            {/* product highlits */}
                            <div className="pt-3 text-[#212121] leading-6 lg:block hidden">
                                <p className="mt-2 text-sm">{description}</p>
                            </div>
                        </div>


                        <div className="lg:pl-6 lg:w-[41.66%]">
                            <div className="">
                                <div className="lg:text-2xl text-xl font-medium lg:block inline-block">₹{price - discountPrice(price)}</div>
                                {/*  */}
                                <div className="inline-block line-through text-[#878787] text-sm font-medium lg:ml-0 ml-2">
                                    ₹ {price}
                                </div>
                                <div className="inline-block text-[13px] text-[#388e3c] ml-2 lg:pt-1 font-medium ">36% off</div>
                                {/*  */}
                                <div className="lg:mt-1 text-xs leading-4 ">
                                    Free delivery by <span className="font-medium">{deliveryDay()}</span>
                                </div>
                            </div>
                            <div className="mt-1 text-sm leading-4">Upto <span className="font-medium">₹7,999</span> Off</div>
                            <div className="mt-1 text-xs leading-4">No Cost EMI from ₹1,999/month</div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard