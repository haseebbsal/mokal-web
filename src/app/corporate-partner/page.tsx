import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import TabWithSlider from "@/components/common/tabs/tab-with-slider";
import Link from "next/link";
import ForNow2 from "@/components/page-components/for-now-2";


export default function CorporatePartner() {
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



                <ForNow2/>


                <HearFromUsAndBlogs hideHearFromUs />


            </div >
        </>
    )
}