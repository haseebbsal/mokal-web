import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import GrowYourBusiness from "@/components/page-components/grow-your-business";
import LinearGradientCircle from "@/components/common/linear-gradient-circle";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";


export default function SpotQuote() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Spot Quote" /> </h1>
                            <p className="text-text-gray text-lg">Unlock Exclusive Rates for Specialized and Time-Sensitive Shipments</p>
                        </div>
                        <BaseBreadCrumb items={['Services', 'Spot Quote']} />
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <Image className="flex-1" src={'/images/spot.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Spot Quotes" /> for Every Shipment</h1>
                            <p className="text-text-gray text-md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. packages and web page editors now use Lorem Ipsum as their default model.</p>
                            <p className="text-text-gray text-md">Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using areIpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here content normal distribution of letters as opposed to here making readable making.</p>
                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                <BaseButton extraClass="flex !min-w-36 sm:w-max w-full justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton>
                            </div>

                        </div>
                    </div>

                </div>







                <div className="bg-base-shadeBlue  p-8  w-full">
                    <div className="sm:w-[80%] m-auto flex flex-col  gap-4 items-center">
                        <div className="flex gap-4 flex-wrap w-full">
                            <div className=" bg-base-lightBlue   relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                                <div className="flex flex-col gap-2 relative z-30 w-full">
                                    <h1 className="font-bold text-base-blue sm:text-2xl text-lg" >Time-Sensitive Shipments</h1>
                                    <p className="text-text-lighterDarkBlue">Same-day deliveries and shipments with strict appointment windows may not be covered by contracted rates and often require spot quotes for pricing.</p>
                                    <Image src={'/images/indicator 1.svg'} alt="shipment1" width={500} className="w-full sm:h-[15rem]" height={500} />
                                    <div className="w-full flex flex-wrap gap-4">
                                        <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <BaseButton className="flex min-w-[10rem] !bg-transparent border-base-purple rounded-xl border-2 text-base-purple justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                    </div>
                                </div>
                                <LinearGradientCircle />
                            </div>

                            <div className=" bg-linearPurple  relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                                <div className="flex flex-col gap-2 relative z-30">
                                    <h1 className="font-bold text-base-purple sm:text-2xl text-lg ">Tailored Shipping Solutions</h1>
                                    <p className="text-base-purple">Customized freight options for refrigerated goods, same-day shipping, Amazon deliveries with specific appointments, air freight, ocean loads, oversized shipments, FTL, PTL, and more!
                                        4o mini</p>
                                    <Image src={'/images/tailored-shipping.svg'} alt="shipment2" width={500} className="w-full sm:h-[15rem]" height={500} />
                                    <div className="w-full flex flex-wrap gap-4">
                                        <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <BaseButton className="flex min-w-[10rem] !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                    </div>
                                </div>
                                <LinearGradientCircle />
                            </div>

                            <div className=" bg-linearBlue p-8 flex sm:flex-row flex-col sm:gap-8 gap-4 items-center rounded-xl w-full">
                                <div className="flex flex-1 text-white flex-col sm:gap-8 gap-4 relative z-30">
                                    <h1 className="font-bold  sm:text-4xl text-lg">Effortless Quote Automation</h1>
                                    <p className="">Say goodbye to calling multiple carriers. We automatically find the best partner and the most competitive rates for your specialized shipment at the time of booking.</p>
                                    <div className="sm:flex hidden gap-8">
                                        <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <BaseButton className="flex min-w-[10rem] !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                    </div>
                                </div>
                                <div className=" flex-1 flex flex-col gap-2">
                                    <Image src={'/images/effortless-quote.svg'} alt="shipment" width={100} className="w-full h-full" height={100} />
                                    <div className="flex sm:hidden gap-2 flex-wrap">
                                        <BaseButton className="flex min-w-[10rem] sm:w-max w-full bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <BaseButton className="flex min-w-[10rem] sm:w-max w-full !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                    </div>
                                </div>
                            </div>





                            <div className=" bg-linearPurple  relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                                <div className="flex flex-col gap-2 relative z-30">
                                    <h1 className="font-bold text-base-purple sm:text-2xl text-lg ">Size, Weight, and Volume Guidelines</h1>
                                    <p className="text-base-purple">LTL shipments typically range from 1 to 6 pallets or 100 to 10,000 lbs. Shipments outside these parameters, like FTL and PTL, will require a spot quote for accurate pricing.</p>
                                    <Image src={'/images/parcel-size 1.svg'} alt="shipment2" width={500} className="w-full sm:h-[15rem]" height={500} />
                                    <div className="w-full flex flex-wrap gap-4">
                                        <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <BaseButton className="flex min-w-[10rem] !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                    </div>
                                </div>
                                <LinearGradientCircle />
                            </div>



                            <div className=" bg-base-lightBlue   relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                                <div className="flex flex-col gap-2 relative z-30 w-full">
                                    <h1 className="font-bold text-base-blue sm:text-2xl text-lg" >Comprehensive Customer Support</h1>
                                    <p className="text-text-lighterDarkBlue">Our team of shipping experts is here to assist you throughout the entire process, from getting your spot quote to managing your final invoice.</p>
                                    <Image src={'/images/customer-service 1.svg'} alt="shipment1" width={500} className="w-full sm:h-[15rem]" height={500} />
                                    <div className="w-full flex flex-wrap gap-4">
                                        <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <BaseButton className="flex min-w-[10rem] !bg-transparent border-base-purple rounded-xl border-2 text-base-purple justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                    </div>
                                </div>
                                <LinearGradientCircle />
                            </div>



                        </div>
                    </div>
                </div>


                <GrowYourBusiness />

                <div className="bg-white w-full">
                    <HearFromUsAndBlogs hideHearFromUs={true} />
                </div>


            </div >
        </>
    )
}