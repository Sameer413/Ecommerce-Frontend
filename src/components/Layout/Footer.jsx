import React from 'react'
import { footer } from '../../data'
import { BsBriefcaseFill } from 'react-icons/bs'
import { MdStars, MdCardGiftcard, MdHelp, MdCopyright } from 'react-icons/md'
import payment from '../../assets/payment.svg'

const FooterOptions = ({ item, title }) => {
    return (
        <div className="flex flex-col md:mx-3 mx-4">
            <span className="text-[#878787] md:text-base text-sm mb-2 font-bold mt-4">
                {title}
            </span>
            {item.map((item, i) => (
                <a
                    key={i}
                    href="#"
                    className="md:text-sm text-xs font-normal m-1 hover:underline text-start   "
                >
                    {item}
                </a>
            ))}
        </div>
    )
}

const FooterDownOptions = ({ icon, title }) => {
    return (
        <div className="flex gap-2 items-center mx-6 px-2 text-xs md:text-sm my-1 md:my-0">
            {icon} <span>{title}</span>
        </div>
    )
}


const Footer = () => {
    return (
        <footer className="bg-[#172337] w-full text-white box-border">
            <div className="w-[90%] mx-auto md:p-10 p-5">
                <div className="md:flex">

                    <div className="flex-[2] flex flex-wrap md:content-normal justify-start md:justify-normal">
                        <FooterOptions title={footer.about.title} item={footer.about.info} />
                        <FooterOptions title={footer.help.title} item={footer.help.info} />
                        <FooterOptions title={footer.consumerPolicy.title} item={footer.consumerPolicy.info} />
                        <FooterOptions title={footer.social.title} item={footer.social.info} />
                    </div>


                    <div className="flex mx-5 flex-1 border-t md:border-t-0 mt-3 md:mt-0">
                        <div className="flex flex-col px-6 text-sm md:border-l">
                            <span className="text-[#878787] md:text-base text-sm mb-2 font-bold mt-4">Mail Us</span>
                            <span className="md:text-sm text-xs">{footer.mailUs}</span>
                        </div>
                        {/*  */}
                        <div className="flex flex-col px-6 text-sm">
                            <span className="text-[#878787] md:text-base text-sm mb-2 font-bold mt-4">Address</span>
                            <span className="md:text-sm text-xs">{footer.address.add}</span>
                            <span className="md:text-sm text-xs">{footer.address.cin}</span>
                            <span className="md:text-sm text-xs">{footer.address.telephone}</span>
                        </div>
                    </div>
                </div>
                {/* down */}
                <div className="mt-7 border-t flex items-center">
                    <div className="py-3 flex flex-col md:flex-row">
                        <FooterDownOptions title={"Become a Seller"} icon={<BsBriefcaseFill color='yellow' />} />
                        <FooterDownOptions title={"Advertise"} icon={<MdStars color='yellow' />} />
                        <FooterDownOptions title={"Gift Cards"} icon={<MdCardGiftcard color='yellow' />} />
                        <FooterDownOptions title={"help"} icon={<MdHelp color='yellow' />} />
                        <FooterDownOptions title={"2007-2023 Sameer Nimje"} icon={<MdCopyright />} />
                    </div>
                    <div className="py-3">
                        <img
                            src={payment}
                            alt=""
                            className=""
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer