import React from 'react'
import { category } from '../../data'


const CategoryCart = ({ title, imgSrc }) => {

    return (
        <div className="flex flex-col box-border text-center cursor-pointer lg:mx-0 mx-5 hover:text-[#2874f0]">
            <img
                className="lg:h-16 h-10 object-contain"
                src={imgSrc}
                alt=""
            />
            <span className="font-medium lg:text-base text-sm">{title}</span>
        </div>
    )
}

const Category = () => {
    return (
        <div className="flex w-[1280px] lg:mx-auto py-2 lg:justify-between mx-2 my-2">
            {category.map((item, i) => (
                <CategoryCart
                    key={i}
                    title={item.title}
                    imgSrc={item.imgUrl}
                />
            ))}
        </div>
    )
}

export default Category