'use client'
import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseInput from "@/components/common/forms/base-input";
import { useForm } from "react-hook-form";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";


export default function Careers() {
    const { control } = useForm()
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Broker Partner" /> </h1>
                            <p className="text-text-gray text-lg">Unlock Exclusive Rates for Specialized and Time-Sensitive Shipments</p>
                        </div>
                        <BaseBreadCrumb items={['Partnerships', 'Broker Partner']} />
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <Image className="flex-1" src={'/images/broker-partner.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold">Become a <LinearGradientText extraClass="" text="Broker Partner" /></h1>
                            <p className="text-text-gray text-md">At MGC Freight, we’re not just part of the shipping industry; we’re at the forefront of transforming it. We collaborate with the best to drive innovation and support business growth.
                                With a focus on individuality, creativity, and teamwork, we provide a unique, dynamic environment where you can develop your strengths while working alongside a world-class team.
                                We’re always excited to connect with talented individuals and welcome new, qualified candidates to join our exceptional team!</p>
                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today <MdKeyboardDoubleArrowRight /></BaseButton>
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between bg-transparent border-base-purple text-base-purple border-2">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton>

                            </div>

                        </div>
                    </div>

                </div>



                <div className="bg-base-shadeBlue w-full sm:py-20  py-8">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 bg-white py-16 sm:w-[80%] shadow-lg rounded-xl text-center sm:gap-16 gap-8`}>
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <Image src={'/images/broker (1).svg'} alt="broker" width={200} height={200}/>
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Discover the MGC Freight Advantage" /></h1>
                            <p className="text-text-gray text-md">Our tailored shipping solutions empower businesses of all sizes with speed, reliability, and significant cost savings on pallet, parcel, PAK, and envelope shipping.
                                At MGC Freight, we offer a wide range of LTL and courier services, including local, cross-border, and international shipping. From eCommerce support to white-glove delivery and specialized freight handling, you’ll enjoy discounted rates from North America’s most trusted carriers.
                                Ready to see how MGC Freight can transform your shipping operations? Fill out the form on this page to schedule a demo, and one of our Shipping Experts will connect with you to show how we can help your business grow with smarter, streamlined shipping solutions.</p>
                        </div>
                        <div className="flex bg-base-shadeBlue p-8 rounded-xl flex-col gap-8 flex-1 items-start">
                            <h1 className="text-2xl font-semibold">Reach Out to a Broker Representative</h1>
                            <BaseInput extraClass="" control={control} placeholder="First Name" label="First Name *" labelPlacement="outside" />
                            <BaseInput extraClass="" control={control} placeholder="Last Name" label="Last Name *" labelPlacement="outside" />
                            <BaseInput extraClass="" control={control} placeholder="Company Name" label="Company Name *" labelPlacement="outside" />
                            <BaseInput extraClass="" type="email" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                            <BaseInput extraClass="" control={control} placeholder="Phone Number" label="Phone Number *" labelPlacement="outside" />

                            <BaseButton extraClass="!py-6">Become a Broker Partner <MdKeyboardDoubleArrowRight /></BaseButton>
                        </div>
                    </div>

                </div>


                <HearFromUsAndBlogs hideHearFromUs />


            </div >
        </>
    )
}