import React from 'react'
import { footer } from '../../data'

const FooterOptions = ({ item }) => {
    return (
        <div className="">{item}</div>
    )
}



const Footer = () => {
    return (
        <footer className="bg-[#172337] w-full text-white">
            <div className="w-[90%] mx-auto">
                <div className="flex">

                    {footer.about.map((item, i) => (
                        <FooterOptions key={i} item={item} />
                    ))}

                    <div className="">b</div>
                </div>
                {/* down */}
                <div className=""></div>
            </div>
        </footer>
    )
}

export default Footer