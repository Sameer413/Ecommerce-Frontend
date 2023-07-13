import React from 'react'
import { BsFillTagFill, BsStarFill } from 'react-icons/bs'

const ProductDetailInfo = () => {
    const deliveryMonth = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[(new Date().getMonth()) % 12];
    }
    const deliveryDay = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[(new Date().getDay() + 3) % 7];
    }

    return (
        <div className="lg:pl-6 box-border">
            <div className="block mt-2">
                {/* product name price etc */}
                <div className="">
                    <span className="text-lg font-normal pointer-events-none">realme 11 Pro+ 5G (Sunrise Beige, 256 GB) (8 GB RAM)</span>

                    <div className="flex mt-2">
                        <span className="pointer-events-none">
                            <div className="bg-[#388e3c] text-white flex items-center gap-1 py-1 px-2 rounded-[3px] text-xs font-medium">3.4 <BsStarFill size={10} /> </div>
                        </span>
                        <span className="text-[#878787] font-medium pl-2 flex">1,234,3234 <span className="lg:block hidden">&nbsp;Rating & 3,545 Reviews</span></span>
                    </div>

                    <div className="text-[#388e3c] mt-3 font-normal">Extra ₹2000 off</div>

                    <div className=" flex items-end">
                        <div className="lg:text-3xl text-xl font-medium inline-block">₹9,499</div>
                        {/*  */}
                        <div className="inline-block line-through text-[#878787] text-lg font-medium ml-2">
                            ₹ 14,999
                        </div>
                        <div className="inline-block text-base text-[#388e3c] ml-2 lg:pt-1 font-medium ">36% off</div>
                        {/*  */}

                    </div>

                    <div className="lg:mt-2 text-sm leading-4 ">
                        Free delivery by <span className="font-medium">{deliveryDay()}</span>
                    </div>
                </div>
                {/* Available Offers */}
                <div className="">
                    <div className="mt-2 text-base font-medium pointer-events-none">Available Offers</div>
                    <div className="w-full pointer-events-none">
                        <ul className="list-none">
                            <li className="flex my-2">
                                <div className="block mt-1"><BsFillTagFill color='#388e3c' /></div>

                                <span className="inline-block text-sm">
                                    <span div className="w-20 mx-1 font-medium">Bank Offer</span>
                                    10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1000, on orders of ₹5,000 and above
                                </span>
                            </li>
                            <li className="flex my-2">
                                <div className="block mt-1"><BsFillTagFill color='#388e3c' /></div>

                                <span className="inline-block text-sm">
                                    <span div className="w-20 mx-1 font-medium">Bank Offer</span>
                                    10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1000, on orders of ₹5,000 and above
                                </span>
                            </li>
                            <li className="flex my-2">
                                <div className="block mt-1"><BsFillTagFill color='#388e3c' /></div>

                                <span className="inline-block text-sm">
                                    <span div className="w-20 mx-1 font-medium">Bank Offer</span>
                                    10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1000, on orders of ₹5,000 and above
                                </span>
                            </li>
                            <li className="flex my-2">
                                <div className="block mt-1"><BsFillTagFill color='#388e3c' /></div>

                                <span className="inline-block text-sm">
                                    <span div className="w-20 mx-1 font-medium">Bank Offer</span>
                                    10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1000, on orders of ₹5,000 and above
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* small sections such as delivery / warrenty / description / Seller*/}

                <div className="w-full">
                    <div className=" mt-6 pointer-events-none ">
                        <div className="inline-block w-28 text-[#878787] pr-3 float-left">Delivery</div>
                        <div className="mb-2 font-medium text-base">Delivery By {new Date().getDate()} {deliveryMonth()}, {deliveryDay()}</div>
                    </div>
                    <div className=" mt-6 pointer-events-none">
                        <div className="inline-block w-28 text-[#878787] pr-3 float-left">Seller</div>
                        <div className="mb-2 text-base">Developers Retailer Pvt Ltd.</div>
                    </div>

                    <div className="mt-6  pointer-events-none">
                        <div className="text-[#878787] w-28 pr-3 float-left">Description</div>
                        <div className="mb-2 text-base flex-1 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, necessitatibus praesentium! Ad, illum aperiam quia consequuntur inventore blanditiis laboriosam nemo earum repudiandae dolorem incidunt molestiae quo consequatur ut veniam sint iure dolorum amet reiciendis?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailInfo