import React from 'react'
import { footer } from '../../data'
import { BsBriefcaseFill } from 'react-icons/bs'
import { MdStars, MdCardGiftcard, MdHelp, MdCopyright } from 'react-icons/md'
import payment from '../../assets/payment.svg'

const FooterOptions = ({ item, title }) => {
    return (
        <div className="flex flex-col mx-5 ">
            <span className="text-[#878787] text-base mb-2 font-bold mt-4">{title}</span>

            {item.map((item, i) => (
                <a
                    key={i}
                    href="#"
                    className="text-sm font-normal m-1 hover:underline text-start"
                >{item}</a>
            ))}
        </div>
    )
}

const FooterDownOptions = ({ icon, title }) => {
    return (
        <div className="flex gap-2 items-center mx-8">
            {icon} <span>{title}</span>
        </div>
    )
}


const Footer = () => {
    return (
        <footer className="bg-[#172337] w-full text-white box-border">
            <div className="w-[90%] mx-auto p-10">
                <div className="flex flex-wrap">

                    <div className="flex-[2] flex flex-wrap ">
                        <FooterOptions title={footer.about.title} item={footer.about.info} />
                        <FooterOptions title={footer.help.title} item={footer.help.info} />
                        <FooterOptions title={footer.consumerPolicy.title} item={footer.consumerPolicy.info} />
                        <FooterOptions title={footer.social.title} item={footer.social.info} />
                    </div>


                    <div className="flex mx-5 flex-1">
                        <div className="flex flex-col px-6 text-sm border-l">
                            <span className="text-[#878787] text-base mb-2 font-bold mt-4">Mail Us</span>
                            <span>{footer.mailUs}</span>
                        </div>
                        {/*  */}
                        <div className="flex flex-col px-6 text-sm">
                            <span className="text-[#878787] text-base mb-2 font-bold mt-4">Address</span>
                            <span>{footer.address.add}</span>
                            <span>{footer.address.cin}</span>
                            <span>{footer.address.telephone}</span>
                        </div>
                    </div>
                </div>
                {/* down */}
                <div className="mt-7 border-t flex items-center">
                    <div className="py-3 flex">
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