import React, { useEffect } from 'react'
import productD from '../../assets/productD.webp'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillThunderbolt } from 'react-icons/ai'
import ProductDetailInfo from '../../container/ProductDetailInfo'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/ProductActions'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {

    const dispatch = useDispatch();

    const { product, loading } = useSelector(state => state.product)

    const params = useParams();

    useEffect(() => {
        dispatch(getProducts(params.id))
    }, [dispatch, params.id])



    return (
        <div className="lg:pt-14 pt-24 lg:max-w-[1366px] m-auto lg:min-w-[1128px]">
            <div className="p-4 bg-white lg:flex ">
                <div className="lg:sticky lg:top-[0] z-[2] bottom-0 lg:w-[41.66%]  ">
                    <div className="flex lg:mx-0 mx-6">
                        {/* small images */}
                        <div className="h-[448px] overflow-hidden lg:block hidden">
                            <div className="h-[704px]">
                                <ul>
                                    <li className="h-16 w-16">
                                        <div className="p-2 w-full h-full relative">
                                            <img className="smax-h-full max-w-full  p-2" src={productD} alt="" />
                                        </div>
                                    </li>
                                    <li className="h-16 w-16">
                                        <div className="p-2 w-full h-full relative">
                                            <img className="smax-h-full max-w-full  p-2" src={productD} alt="" />
                                        </div>
                                    </li>
                                    <li className="h-16 w-16">
                                        <div className="p-2 w-full h-full relative">
                                            <img className="smax-h-full max-w-full  p-2" src={productD} alt="" />
                                        </div>
                                    </li>
                                    <li className="h-16 w-16">
                                        <div className="p-2 w-full h-full relative">
                                            <img className="smax-h-full max-w-full  p-2" src={productD} alt="" />
                                        </div>
                                    </li>
                                    <li className="h-16 w-16">
                                        <div className="p-2 w-full h-full relative">
                                            <img className="smax-h-full max-w-full  p-2" src={productD} alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* main image */}
                        <div className="flex justify-center items-center border w-full lg:py-0 py-4">
                            <img className="lg:h-auto h-64" src={productD} alt="" />
                        </div>
                    </div>
                    {/* buttons */}
                    <div className="justify-center flex mt-2">
                        <button className="uppercase lg:py-4 lg:px-5 py-3 px-3 gap-2 bg-[#ff9f00] flex mx-4 items-center text-base text-white font-medium"><FaShoppingCart /> Add to Cart</button>
                        <button className="uppercase lg:py-4 lg:px-5  py-3 px-3 gap-2 bg-[#fb641b] flex mx-4 items-center text-base text-white font-medium"><AiFillThunderbolt /> Buy Now</button>
                    </div>
                </div>
                <div className="block lg:w-[60%]">
                    <ProductDetailInfo
                        productName={product?.productName}
                        price={product?.price}
                        description={product?.description}
                        rating={product?.rating}
                        reviews={product?.reviews.length}
                        stock={product?.stock}
                    />
                    {/* Review component soon */}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails