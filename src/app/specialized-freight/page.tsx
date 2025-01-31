'use client'
import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import LinearGradientCircle from "@/components/common/linear-gradient-circle";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import TabWithSlider from "@/components/common/tabs/tab-with-slider";
import Link from "next/link";




export default function SpecializedFreight() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Specialized Freight" /> </h1>
                            <p className="text-text-gray text-lg">Get Easy Access to a Range of Additional Freight Services Directly from ONE Platform</p>
                        </div>
                        <BaseBreadCrumb items={['Services', 'Specialized Freight']} />
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <Image className="flex-1" src={'/images/tailored-shipment.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Tailored Freight Solutions" /> for Every Shipment </h1>
                            <p className="text-text-gray text-md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. packages and web page editors now use Lorem Ipsum as their default model.</p>
                            <p className="text-text-gray text-md">Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using areIpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here content normal distribution of letters as opposed to here making readable making.</p>
                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                <Link href={'/book-a-demo'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Book a Demo<MdKeyboardDoubleArrowRight className="text-lg" /></Link>


                                {/* <BaseButton extraClass="flex !min-w-36 sm:w-max w-full justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton> */}
                            </div>

                        </div>
                    </div>


                    <div className="w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:pb-20 pb-16 sm:w-[80%] text-center gap-16`}>
                            <TabWithSlider hideButton title={<h1 className="sm:!text-3xl text-lg font-bold" >Trusted Courier Partner Solutions for <LinearGradientText text="Seamless Deliveries" /></h1>} description={['Enhance your shipping capabilities with MGC Freight’s reliable courier partnerships. We ensure timely deliveries, secure handling, and exceptional service, providing your business with the flexibility and efficiency needed to satisfy your customers every step of the way.']} carousel={[{ imageSrc: "/couriers/Artboard.svg", description: "Shipping, courier, and expedited transport services within the US, Canada." }, { imageSrc: "/couriers/gardewine.svg", description: "Leading trucking company providing logistics services across Canada for 70+ years." }, { imageSrc: "/couriers/DayandRoss.svg", description: "Logistics company that operates in various sectors, including logistics solutions" }, { description: "Canada’s most trusted transport carrier for over 60 years.", imageSrc: "/couriers/M-O-2.svg" }, { imageSrc: "/couriers/kindersley.svg", description: "Providing truckload and LTL service throughout North America" }, { imageSrc: "/couriers/DHL.svg", description: "American-founded German logistics company delivering over 1.8 billion parcels per year." }, { imageSrc: "/couriers/Canpar.svg", description: "Helping small parcel delivery companies’ shipping processes on a day-to-day basis." }]} />
                        </div>
                    </div>
                </div>



                <div className="bg-base-shadeBlue  p-8  w-full">
                    <div className="sm:w-[80%] m-auto flex flex-col  gap-4 items-center">
                        <div className="flex gap-4 flex-wrap w-full">
                            <div className=" bg-base-lightBlue   relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                                <div className="flex flex-col gap-2 relative z-30 w-full">
                                    <h1 className="font-bold text-base-blue sm:text-2xl text-lg" >Freight Services as Unique as Your Business</h1>
                                    <p className="text-text-lighterDarkBlue">Our specialized freight services can be used along with a wide range of accessorials such as tailgate, signature on delivery, and much more to serve your business’ exact shipping needs.</p>
                                    <Image src={'/images/freight-service.svg'} alt="shipment1" width={500} className="w-full sm:h-[15rem]" height={500} />
                                    <div className="w-full flex flex-wrap gap-4">
                                        <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>

                                        <Link href={'/get-a-quote'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Get A Quote<MdKeyboardDoubleArrowRight className="text-lg" /></Link>
                                    </div>
                                </div>
                                <LinearGradientCircle />
                            </div>

                            <div className=" bg-linearPurple  relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                                <div className="flex flex-col gap-2 relative z-30">
                                    <h1 className="font-bold text-base-purple sm:text-2xl text-lg ">Your Specialized Freight Provider</h1>
                                    <p className="text-base-purple">No matter if your business is shipping hazardous materials, fragile or oversized items, or other freight that requires specialized handling, our specialized freight services can accommodate sensitive freight with ease.</p>
                                    <Image src={'/images/freight-provider.svg'} alt="shipment2" width={500} className="w-full sm:h-[15rem]" height={500} />
                                    <div className="w-full flex flex-wrap gap-4">
                                        <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <Link href={'/get-a-quote'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Get A Quote<MdKeyboardDoubleArrowRight className="text-lg" /></Link>
                                        {/* <Link href={'/get-a-quote'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Get A Quote<MdKeyboardDoubleArrowRight className="text-lg" /></Link> */}
                                    </div>
                                </div>
                                <LinearGradientCircle />
                            </div>

                            <div className=" bg-linearBlue p-8 flex sm:flex-row flex-col sm:gap-8 gap-4 items-center rounded-xl w-full">
                                <div className="flex flex-1 text-white flex-col sm:gap-8 gap-4 relative z-30">
                                    <h1 className="font-bold  sm:text-4xl text-lg">Connecting the World Through Logistics</h1>
                                    <p className="">Streamline your global supply chain with reliable shipping solutions by air, land, and sea. From small parcels to large freight, our network ensures fast, efficient, and secure delivery to every corner of the world.</p>
                                    <div className="sm:flex hidden gap-8">
                                        <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <Link href={'/get-a-quote'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-white border-2  border-white">Get A Quote<MdKeyboardDoubleArrowRight className="text-lg" /></Link>
                                    </div>
                                </div>
                                <div className=" flex-1 flex flex-col gap-2">
                                    <Image src={'/images/freight-challenge.svg'} alt="shipment" width={100} className="w-full h-full" height={100} />
                                    <div className="flex sm:hidden gap-2 flex-wrap">
                                        <BaseButton className="flex min-w-[10rem] sm:w-max w-full bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                                        <Link href={'/get-a-quote'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-white border-2  border-white">Get A Quote<MdKeyboardDoubleArrowRight className="text-lg" /></Link>

                                        {/* <BaseButton className="flex min-w-[10rem] sm:w-max w-full !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-full">
                    <div className={`bg-white  p-8 flex flex-col gap-16 items-center `}>
                        <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold"><LinearGradientText text="Specialized" /> Freight Services</h1>
                        <div className="flex flex-col gap-8 sm:w-[80%] flex-wrap">
                            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 ">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/accessible.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Restricted Area Deliveries</p>
                                    </div>
                                    <p className="text-text-gray">Efficient shipping to locations with limited access, ensuring timely and secure deliveries even in hard-to-reach areas.</p>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/bond.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">In-Bond Freight Handling</p>
                                    </div>
                                    <p className="text-text-gray">Specialized services for in-bond shipments, ensuring compliance and efficient transport of goods under bond status.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/home.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Specialized Pickup and Delivery</p>
                                    </div>
                                    <p className="text-text-gray">Customized threshold pickup and delivery services for your sensitive or oversized shipments, ensuring safe handling from start to finish.</p>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/parcel.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Trade Show Freight Solutions</p>
                                    </div>
                                    <p className="text-text-gray">Seamless logistics for trade show deliveries, with timely and secure transport of your exhibits to and from events.</p>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/amazon-delivery.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Amazon Fulfillment Shipping</p>
                                    </div>
                                    <p className="text-text-gray">Streamlined delivery solutions for Fulfilled by Amazon (FBA) shipments, ensuring your products reach Amazon's warehouses efficiently.</p>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/freezing.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Freeze Protection Shipping</p>
                                    </div>
                                    <p className="text-text-gray">Reliable freight services designed to protect your sensitive goods from freezing during transit, ensuring they arrive in optimal condition.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 justify-center w-full flex-wrap">
                                <BaseButton extraClass="flex sm:w-max w-full !min-w-52 justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                <Link href={'/book-a-demo'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Book a Demo<MdKeyboardDoubleArrowRight className="text-lg" /></Link>


                                {/* <BaseButton extraClass="flex sm:w-max w-full !min-w-36 justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton> */}
                            </div>
                        </div>

                    </div>
                    <HearFromUsAndBlogs hideHearFromUs={true} />
                </div>

            </div >
        </>
    )
}