'use client'
import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";


export default function CustomerSpotlight() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Customer Spotlight" /> </h1>
                            <p className="text-text-gray text-lg">Unlock Exclusive Rates for Specialized and Time-Sensitive Shipments</p>
                        </div>
                        <BaseBreadCrumb items={['About Us', 'Customer Spotlight']} />
                    </div>
                </div>

                <div className="flex flex-col gap-8 bg-white py-16">

                    <div className="bg-white w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] sm:items-start items-center sm:rounded-r-full shadow-xl  text-center sm:gap-16 gap-4`}>
                            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                                <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Streamlining Logistics for a Growing E-Commerce Business" /></h1>
                                <p className="text-text-gray text-md">When <span className="font-semibold text-xl text-black">Sarah</span>, the owner of a booming e-commerce store specializing in handmade goods, struggled with increasing order volumes, she turned to MGC Freight for help. Her business needed reliable shipping solutions to manage her growth and maintain customer satisfaction.
                                    MGC Freight stepped in with its comprehensive logistics platform, offering Sarah tailored LTL and PTL options to match her shipping needs. By leveraging our multi-location fulfillment services, her orders were processed faster, reducing transit times and shipping costs. With real-time tracking, Sarah could monitor shipments end-to-end, ensuring timely delivery and transparent communication with her customers.
                                    Since partnering with MGC Freight, Sarah’s business has grown by 40%, her customer satisfaction scores have soared, and she’s saved countless hours previously spent on managing logistics.
                                    “Working with MGC Freight has been a game-changer for my business,” says Sarah. “They’ve allowed me to focus on what I love—creating unique products—while they take care of the shipping.”</p>
                                <div className="flex gap-4 flex-wrap">
                                    <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">See Current openings <MdKeyboardDoubleArrowRight /></BaseButton>
                                </div>

                            </div>
                            <Image className="flex-1" src={'/images/spotlight1.svg'} alt="truckload" width={200} height={200} />
                        </div>

                    </div>


                    <div className="bg-white w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] sm:items-start items-center sm:rounded-l-full shadow-xl  text-center sm:gap-16 gap-4`}>
                            <Image className="flex-1" src={'/images/spotlight1.svg'} alt="truckload" width={200} height={200} />
                            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                                <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Streamlining Logistics for a Growing E-Commerce Business" /></h1>
                                <p className="text-text-gray text-md">When <span className="font-semibold text-xl text-black">Sarah</span>, the owner of a booming e-commerce store specializing in handmade goods, struggled with increasing order volumes, she turned to MGC Freight for help. Her business needed reliable shipping solutions to manage her growth and maintain customer satisfaction.
                                    MGC Freight stepped in with its comprehensive logistics platform, offering Sarah tailored LTL and PTL options to match her shipping needs. By leveraging our multi-location fulfillment services, her orders were processed faster, reducing transit times and shipping costs. With real-time tracking, Sarah could monitor shipments end-to-end, ensuring timely delivery and transparent communication with her customers.
                                    Since partnering with MGC Freight, Sarah’s business has grown by 40%, her customer satisfaction scores have soared, and she’s saved countless hours previously spent on managing logistics.
                                    “Working with MGC Freight has been a game-changer for my business,” says Sarah. “They’ve allowed me to focus on what I love—creating unique products—while they take care of the shipping.”</p>
                                <div className="flex gap-4 flex-wrap">
                                    <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">See Current openings <MdKeyboardDoubleArrowRight /></BaseButton>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}