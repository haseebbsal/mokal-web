'use client'
import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseInput from "@/components/common/forms/base-input";
import { useForm } from "react-hook-form";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import TabWithSlider from "@/components/common/tabs/tab-with-slider";
import Link from "next/link";


export default function CorporatePartner() {
    const { control } = useForm()
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Corporate Partner" /> </h1>
                            <p className="text-text-gray text-lg">Unlock Exclusive Rates for Specialized and Time-Sensitive Shipments</p>
                        </div>
                        <BaseBreadCrumb items={['Partnerships', 'Corporate Partner']} />
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <Image className="flex-1" src={'/images/corporate-partner.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold">Become a <LinearGradientText extraClass="" text="Corporate Partner" /></h1>
                            <p className="text-text-gray text-md">At MGC Freight, we’re not just part of the shipping industry; we’re at the forefront of transforming it. We collaborate with the best to drive innovation and support business growth.
                                With a focus on individuality, creativity, and teamwork, we provide a unique, dynamic environment where you can develop your strengths while working alongside a world-class team.
                                We’re always excited to connect with talented individuals and welcome new, qualified candidates to join our exceptional team!</p>
                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today <MdKeyboardDoubleArrowRight /></BaseButton>
                                <Link href={'/book-a-demo'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Book a Demo<MdKeyboardDoubleArrowRight className="text-lg" /></Link>


                                {/* <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between bg-transparent border-base-purple text-base-purple border-2">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton> */}

                            </div>

                        </div>
                    </div>


                    <div className="w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:pb-20 pb-16 sm:w-[80%] text-center gap-16`}>
                            <TabWithSlider hideButton title={<h1 className="sm:!text-3xl text-lg font-bold" ><LinearGradientText text="Collaborating with Industry Leaders" /></h1>} description={['At MGC Freight, we’re honored to partner with some of the most reputable corporations across North America. Together, we strive to empower small businesses with innovative shipping solutions that drive growth and success.']} carousel={[{ imageSrc: "/couriers/Artboard.svg", description: "Shipping, courier, and expedited transport services within the US, Canada." }, { imageSrc: "/couriers/gardewine.svg", description: "Leading trucking company providing logistics services across Canada for 70+ years." }, { imageSrc: "/couriers/DayandRoss.svg", description: "Logistics company that operates in various sectors, including logistics solutions" }, { description: "Canada’s most trusted transport carrier for over 60 years.", imageSrc: "/couriers/M-O-2.svg" }, { imageSrc: "/couriers/kindersley.svg", description: "Providing truckload and LTL service throughout North America" }, { imageSrc: "/couriers/DHL.svg", description: "American-founded German logistics company delivering over 1.8 billion parcels per year." }, { imageSrc: "/couriers/Canpar.svg", description: "Helping small parcel delivery companies’ shipping processes on a day-to-day basis." }]} />
                        </div>
                    </div>

                </div>



                <div className="bg-base-shadeBlue w-full sm:py-20  py-8">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 bg-white py-16 sm:w-[80%] shadow-lg rounded-xl text-center sm:gap-16 gap-8`}>
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <Image src={'/images/office-building (1).svg'} alt="broker" width={200} height={200} />
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Building Strong Partnerships" /></h1>
                            <p className="text-text-gray text-md">Our Corporate Partnership program is designed to create meaningful cross-promotional opportunities. Highlight special offers to MGC Freight customers, expand your audience reach, and deliver exceptional solutions while offering exclusive access to our comprehensive shipping platform to your customer base.
                                Seamless IntegrationConnect with hundreds of small and medium-sized businesses seeking tools and services to fuel their growth.
                                Enhanced Customer SupportEmpower your customers with MGC Freight’s cutting-edge freight management platform, built to streamline their shipping operations.
                                Shared SuccessEstablish a lasting partnership grounded in trust and a mutual commitment to helping businesses reach their full potential.</p>
                        </div>
                        <div className="flex bg-base-shadeBlue p-8 rounded-xl flex-col gap-8 flex-1 items-start">
                            <h1 className="text-2xl font-semibold">Reach Out to a Broker Representative</h1>
                            <BaseInput extraClass="" control={control} placeholder="First Name" label="First Name *" labelPlacement="outside" />
                            <BaseInput extraClass="" control={control} placeholder="Last Name" label="Last Name *" labelPlacement="outside" />
                            <BaseInput extraClass="" control={control} placeholder="Company Name" label="Company Name *" labelPlacement="outside" />
                            <BaseInput extraClass="" type="email" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                            <BaseInput extraClass="" control={control} placeholder="Phone Number" label="Phone Number *" labelPlacement="outside" />
                            <BaseInput extraClass="" control={control} placeholder="Enter Size" label="Size of Partnership Audience " labelPlacement="outside" />
                            <BaseInput extraClass="" control={control} placeholder="Describe" label="Describe the type of partnership " labelPlacement="outside" />


                            <BaseButton extraClass="!py-6">Become a Corporate Partner   <MdKeyboardDoubleArrowRight /></BaseButton>
                        </div>
                    </div>

                </div>


                <HearFromUsAndBlogs hideHearFromUs />


            </div >
        </>
    )
}