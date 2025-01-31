import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import Link from "next/link";




export default function WhiteGlove() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="White Glove Services" /> </h1>
                            <p className="text-text-gray text-lg">Enhance Your Customer Experience with MGC Freight’s Premium White Glove Services</p>
                        </div>
                        <BaseBreadCrumb items={['Services', 'White Glove Services']} />
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <Image className="flex-1" src={'/images/white-glove.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="White Glove" /> Services</h1>
                            <p className="text-text-gray text-md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. packages and web page editors now use Lorem Ipsum as their default model.</p>
                            <p className="text-text-gray text-md">Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using areIpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here content normal distribution of letters as opposed to here making readable making.</p>
                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                <BaseButton extraClass="flex !min-w-36 sm:w-max w-full justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton>
                            </div>

                        </div>
                    </div>

                </div>


                <div className="bg-base-shadeBlue w-full">
                    <div className={`bg-base-shadeBlue  p-8 flex flex-col gap-16 items-center `}>
                        <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold"><LinearGradientText text="Diverse Service Options" />  Tailored to Your Needs</h1>
                        <div className="flex flex-col sm:w-[80%] w-full gap-8">
                            <div className="flex gap-4 shadow-lg bg-white rounded-xl p-4 items-center">
                                <Image src={'/icons/amazon-delivery.svg'} alt="flexible" width={80} height={80} />
                                <div className="flex flex-col gap-2">
                                    <p className="text-base-blue font-semibold text-xl">Delivery to Door Step</p>
                                    <p className="text-text-gray">One delivery person will deliver the order to the recipient’s main entrance.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 shadow-lg bg-white rounded-xl p-4 items-center">
                                <Image src={'/icons/hotel (1).svg'} alt="flexible" width={80} height={80} />
                                <div className="flex flex-col gap-2">
                                    <p className="text-base-blue font-semibold text-xl">Delivery to Room of Choice</p>
                                    <p className="text-text-gray">One delivery person will deliver the order to the recipient’s room of choice.</p>
                                </div>
                            </div>
                            <p className="text-text-gray text-sm">*Additional features, such as 2-person or 3-person delivery for bulkier shipments, are available as needed. Please note that all white glove services include residential delivery and tailgate service fees.</p>
                        </div>
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`bg-white  p-8 flex flex-col gap-16 items-center `}>
                        <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Premium White Glove <LinearGradientText text="White Glove" /> Freight Services</h1>
                        <div className="flex flex-col gap-8 sm:w-[80%] flex-wrap">
                            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 ">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/discount-rates.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Exclusive Rates, No Hidden Fees</p>
                                    </div>
                                    <p className="text-text-gray">MGC Freight offers instant access to preferred pallet rates from our trusted partner carriers, with no additional or hidden fees—what you see is what you pay!</p>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/parcel.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Careful Handling of Your Shipments</p>
                                    </div>
                                    <p className="text-text-gray">Our vetted white glove service providers are uniformed, professional, and ensure every delivery is handled with the utmost care.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/home.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Flexible Inside Delivery Options</p>
                                    </div>
                                    <p className="text-text-gray">Choose from various White Glove delivery options, including First Room, Room of Choice, and additional services like unpacking and debris removal.</p>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/import.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Track Shipments in Real-Time</p>
                                    </div>
                                    <p className="text-text-gray">Stay informed with real-time shipment tracking directly through the MGC Freight platform, from pickup to delivery.</p>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/office-building.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Premium Delivery Services for Businesses</p>
                                    </div>
                                    <p className="text-text-gray">MGC Freight’s white glove services also cater to businesses, providing large item deliveries for hotels, retailers, and commercial spaces, including displays and fixtures.</p>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/shield.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Streamlined, Secure Shipping</p>
                                    </div>
                                    <p className="text-text-gray">Book carriers, select delivery options, choose pickup times, and generate shipping labels all in one seamless process on the MGC Freight platform.</p>
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