import React from 'react'
import Category from '../../components/Home/Category'
import Carousel from '../../components/Home/Carousel'
import Trending from '../../components/Home/Trending'

const Home = () => {
    return (
        <div className="lg:pt-14 pt-24">
            {/* Category */}
            <div className="bg-white border-b-[1px] overflow-x-scroll shadow-sm">
                <Category />
            </div>
            {/* Coursel */}
            <div className="lg:my-2 my-1">
                <Carousel />
            </div>
            <div className="lg:my-2 my-1">
                <Trending />
            </div>
            <div className="lg:my-2 my-1 ">
                <Trending />
            </div>

        </div>
    )
}

export default Home