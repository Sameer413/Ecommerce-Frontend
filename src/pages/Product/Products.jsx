import React from 'react'
import ProductFilter from '../../container/ProductFilter'
import ProductCard from '../../components/Product/ProductCard'

const Products = () => {
    return (
        <div className="w-full lg:pt-14 pt-24">
            <div className="flex lg:m-4 m-2 gap-3">
                {/* filter section */}
                <div
                    style={{ flex: "0 0 280px", maxWidth: "280px" }}
                    className="bg-white shadow-md lg:block hidden">
                    <ProductFilter />
                    <div className="">

                    </div>
                </div>
                <div
                    style={{ flexGrow: 1, overflow: "auto" }}
                    className="h-[2000px] bg-white ">
                    {/* product list heading */}
                    <div className="px-4 pt-3 mt-2 border-b lg:block hidden">
                        <span className="font-medium lg:text-base text-sm inline-block">{`Showing 1 - 24 of 8,417 results for "mobiles"`}</span>
                        <div className="flex text-sm gap-5">
                            <span className="font-medium cursor-pointer text-base pb-2">Sort By</span>
                            <div className="cursor-pointer text-base font-normal pb-2">Relavence</div>
                            <div className="cursor-pointer text-base font-normal pb-2">Price - Low to High</div>
                            <div className="cursor-pointer text-base font-normal pb-2">Price - High to Low</div>
                            <div className="cursor-pointer text-base font-normal pb-2">Newest First</div>
                        </div>
                    </div>
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Products