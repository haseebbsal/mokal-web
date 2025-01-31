import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { aboutUsServices, partnershipLinks, quickLinksLinks, resourcesLinks, servicesLinks } from "@/utils/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-white">
            <div className="w-full">
                <Marquee className=" ">
                    <div className="p-4">
                        <Image src='/vendors/AppleExpress.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Carrier-Logos-1.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Carrier-Logos-2.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Carrier-Logos.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Carrier-Logos1.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Carrier-Logos6.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Carrier-Logos10.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Group-15.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Group-1000004488.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/intelcom-1.svg' alt="intelcom" width={100} height={100} />
                    </div>
                    <div className="p-4">
                        <Image src='/vendors/Web-Logo-v2.0-1.svg' alt="intelcom" width={100} height={100} />
                    </div>
                </Marquee>
                <div className="w-full h-[0.1rem] bg-linearPurple">
                </div>
            </div>
            <div className="sm:px-20 px-4 sm:py-20 py-8">
                <div className="grid sm:grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-cols-2 gap-16 w-full">

                    <div className="flex flex-col gap-8 sm:col-span-1 col-span-2">
                        <Link href={'/'}>
                            <Image src={'/logo.svg'} alt="logo" width={250} height={250} />
                        </Link>
                        <div className="flex flex-col gap-4">
                            <p className="text-text-gray">Stay Connected With Us</p>
                            <div className="flex gap-2 text-icon">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                                <FaYoutube />
                                <FaLinkedinIn />
                            </div>
                            <Link href={'/get-a-quote'} className="bg-transparent border-base-purple border-2 text-lg font-bold text-base-purple w-max p-2 rounded-xl">Get Quick Quote</Link>
                            <Link href={'/book-a-demo'} className="bg-transparent border-base-purple border-2 text-lg font-bold text-base-purple w-max p-2 rounded-xl">Book a Demo</Link>
                            <p className="text-text-gray">info@mgcfreight.com</p>
                            <p className="text-text-gray">T: 1-235-456-5689</p>
                            <p className="text-text-gray">T: 1-235-456-5689</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-base-purple text-2xl font-medium">Services</p>
                        {servicesLinks.map((e) => <Link key={e.link} className="text-text-gray" href={e.link}>{e.name}</Link>)}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <p className="text-base-purple text-2xl font-medium">About Us</p>
                            {aboutUsServices.map((e) => <Link key={e.link} className="text-text-gray" href={e.link}>{e.name}</Link>)}

                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-base-purple text-2xl font-medium">Quick Links</p>
                            {quickLinksLinks.map((e) => <Link key={e.link} className="text-text-gray" href={e.link}>{e.name}</Link>)}
                        </div>
                    </div>

                    <div className="sm:flex grid grid-cols-2 sm:gap-4 gap-16 sm:flex-col  sm:col-span-1 col-span-2">
                        <div className="flex flex-col gap-4 flex-1">
                            <p className="text-base-purple text-2xl font-medium">Partnership</p>
                            {partnershipLinks.map((e) => <Link key={e.link} className="text-text-gray" href={e.link}>{e.name}</Link>)}
                        </div>
                        <div className="flex flex-col gap-4 flex-1">
                            <p className="text-base-purple text-2xl font-medium">Resources</p>
                            {resourcesLinks.map((e) => <Link key={e.link} className="text-text-gray" href={e.link}>{e.name}</Link>)}
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
            <div className="bg-nav  sm:px-20 px-4 py-4 text-base-blue font-normal">
                <p>©2024 Copyright MGCFREIGHT Inc. All rights reserved</p>
            </div>
        </div >
    )
}