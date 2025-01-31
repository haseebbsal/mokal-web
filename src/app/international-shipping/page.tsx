import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import ExpertLogistics from "@/components/page-components/expert-logistics";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import Link from "next/link";


export default function InternationalShipping() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="International Shipping" /> </h1>
                            <p className="text-text-gray text-lg">Shipping Internationally from Canada, the US, and Mexico Made Effortless</p>
                        </div>
                        <BaseBreadCrumb items={['Services','International Shipping']}/>
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <Image className="flex-1" src={'/images/international-shipping.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="International " /> Shipping Services</h1>
                            <p className="text-text-gray text-md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. packages and web page editors now use Lorem Ipsum as their default model.</p>
                            <p className="text-text-gray text-md">Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using areIpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here content normal distribution of letters as opposed to here making readable making.</p>
                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                <Link href={'/book-a-demo'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Book a Demo<MdKeyboardDoubleArrowRight className="text-lg" /></Link>


                                {/* <BaseButton extraClass="flex !min-w-36 sm:w-max w-full justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton> */}
                            </div>

                        </div>
                    </div>

                </div>





                <div>
                    <ExpertLogistics />
                    <div className="bg-base-shadeBlue w-full">
                        <div className={`  p-8 flex flex-col gap-16 items-center `}>
                            <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold"><LinearGradientText text="International Shipping" /> that Reaches Every Corner of the Globe</h1>
                            <div className="flex flex-col gap-8 sm:w-[80%] flex-wrap">
                                <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 ">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/icons/planet-earth.svg'} alt="flexible" width={40} height={40} />
                                            <p className="text-base-blue text-xl font-semibold">Simplified Global Shipping</p>
                                        </div>
                                        <p className="text-text-gray">Ship from Canada, the US, or Mexico to any destination with exclusive rates from top carriers.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/icons/customs.svg'} alt="flexible" width={40} height={40} />
                                            <p className="text-base-blue text-xl font-semibold">Effortless Customs Management</p>
                                        </div>
                                        <p className="text-text-gray">Automated customs paperwork reduces errors and chargebacks for smoother international shipments.</p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/icons/import.svg'} alt="flexible" width={40} height={40} />
                                            <p className="text-base-blue text-xl font-semibold">Real-Time Shipment Tracking</p>
                                        </div>
                                        <p className="text-text-gray">Track your shipments end-to-end with real-time updates from global couriers.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/icons/unified.svg'} alt="flexible" width={40} height={40} />
                                            <p className="text-base-blue text-xl font-semibold">Unified Invoicing Dashboard</p>
                                        </div>
                                        <p className="text-text-gray">Manage all your shipping invoices, both domestic and international, in one place.</p>
                                    </div>



                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/icons/parcel.svg'} alt="flexible" width={40} height={40} />
                                            <p className="text-base-blue text-xl font-semibold">Trusted Global Parcel Shipping</p>
                                        </div>
                                        <p className="text-text-gray">We partner with leading international carriers to ensure reliable and secure shipments.</p>
                                    </div>



                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2 items-center">
                                            <Image src={'/icons/24-hours-support.svg'} alt="flexible" width={40} height={40} />
                                            <p className="text-base-blue text-xl font-semibold">24/7 Customer Support</p>
                                        </div>
                                        <p className="text-text-gray">Our experts are available to assist you throughout the shipping journey, anywhere in the world.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 justify-center w-full flex-wrap">
                                    <BaseButton extraClass="flex sm:w-max w-full !min-w-52 justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                    <BaseButton extraClass="flex sm:w-max w-full !min-w-36 justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton>
                                </div>
                            </div>

                        </div>
                        <HearFromUsAndBlogs hideHearFromUs={true} />
                    </div>

                </div>


            </div >
        </>
    )
}