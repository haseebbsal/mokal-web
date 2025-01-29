import Image from "next/image";
import BaseSlider from "../common/base-slider";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BaseButton from "../common/base-button";
import { SiMinutemailer } from "react-icons/si";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const footerResponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
        partialVisibilityGutter: 2000
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10,
        partialVisibilityGutter: 2000
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        partialVisibilityGutter: 2000
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        partialVisibilityGutter: 2000
    }
};

export default function Footer() {
    return (
        <div className="w-full bg-white">
            <BaseSlider autoPlaySpeed={100} extraResponsive={footerResponsive}>
                <Image src='/vendors/AppleExpress.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Carrier-Logos-1.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Carrier-Logos-2.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Carrier-Logos.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Carrier-Logos1.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Carrier-Logos6.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Carrier-Logos10.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Group-15.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Group-1000004488.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/intelcom-1.svg' alt="intelcom" width={100} height={100} />
                <Image src='/vendors/Web-Logo-v2.0-1.svg' alt="intelcom" width={100} height={100} />
            </BaseSlider>
            <div className="sm:px-20 px-4 sm:py-20 py-8">
                <div className="grid sm:grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-cols-2 gap-16 w-full">

                    <div className="flex flex-col gap-8 sm:col-span-1 col-span-2">
                        <Image src={'/logo.svg'} alt="logo" width={250} height={250} />
                        <div className="flex flex-col gap-4">
                            <p className="text-text-gray">Stay Connected With Us</p>
                            <div className="flex gap-2 text-icon">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                                <FaYoutube />
                                <FaLinkedinIn />
                            </div>
                            <BaseButton className="bg-transparent border-base-purple border-2 text-lg font-bold text-base-purple w-max">Get Quick Quote</BaseButton>
                            <BaseButton className="bg-transparent border-base-purple border-2 text-lg font-bold text-base-purple w-max">Book a Demo</BaseButton>
                            <p className="text-text-gray">info@mgcfreight.com</p>
                            <p className="text-text-gray">T: 1-235-456-5689</p>
                            <p className="text-text-gray">T: 1-235-456-5689</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-base-purple text-2xl font-medium">Services</p>
                        <p className="text-text-gray">Less Than Truckload (LTL)</p>
                        <p className="text-text-gray">Courier Services</p>
                        <p className="text-text-gray">Specialized Freight</p>
                        <p className="text-text-gray">International Shipping</p>
                        <p className="text-text-gray">White Glove Services</p>
                        <p className="text-text-gray">Spot Quote</p>
                        <p className="text-text-gray">Fulfillment Services</p>
                        <p className="text-text-gray">Freight Forwarding</p>
                        <p className="text-text-gray">Truckload</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <p className="text-base-purple text-2xl font-medium">About Us</p>
                            <p className="text-text-gray">Who We Are</p>
                            <p className="text-text-gray">Contact Us</p>
                            <p className="text-text-gray">Careers</p>
                            <p className="text-text-gray">Customer Spotlight</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-base-purple text-2xl font-medium">Quick Links</p>
                            <p className="text-text-gray">Terms & Conditions</p>
                            <p className="text-text-gray">Privacy Policy</p>
                            <p className="text-text-gray">Claims</p>
                        </div>
                    </div>

                    <div className="sm:flex grid grid-cols-2 sm:gap-4 gap-16 sm:flex-col  sm:col-span-1 col-span-2">
                        <div className="flex flex-col gap-4 flex-1">
                            <p className="text-base-purple text-2xl font-medium">Partnership</p>
                            <p className="text-text-gray">Broker Partners</p>
                            <p className="text-text-gray">Corporate Partners</p>
                            <p className="text-text-gray">Carrier Partners</p>
                        </div>
                        <div className="flex flex-col gap-4 flex-1">
                            <p className="text-base-purple text-2xl font-medium">Resources</p>
                            <p className="text-text-gray">Video Library</p>
                            <p className="text-text-gray">Blogs</p>
                            <p className="text-text-gray">Shipping Guides</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:col-span-1 col-span-2">
                        <p className="text-base-purple text-2xl font-medium">Social</p>
                        <div className="flex gap-4">
                            <FaLocationDot className="sm:text-4xl text-2xl" />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Address</p>
                                <p>2275 Upper Middle Road East, Suite 101 Oakville, ON L6H 0C3</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <SiMinutemailer className="text-2xl" />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Email</p>
                                <p>carriers@mgcfreight.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <BsFillTelephoneOutboundFill className="text-2xl" />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Phone</p>
                                <p>+1 (289) 295-1640</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-linearPurple sm:px-20 px-4 py-4 text-base-blue font-normal">
                <p>©2024 Copyright MGCFREIGHT Inc. All rights reserved</p>
            </div>
        </div >
    )
}