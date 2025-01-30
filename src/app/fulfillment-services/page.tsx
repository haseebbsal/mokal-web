import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import GrowYourBusiness from "@/components/page-components/grow-your-business";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";


export default function FulfillmentServices() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Fulfillment Services" /> </h1>
                            <p className="text-text-gray text-lg">Scalable Pick and Pack Fulfillment Solutions for Your Business</p>
                        </div>
                        <BaseBreadCrumb items={['Services','Fulfillment Services']}/>
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <Image className="flex-1" src={'/images/fulfillment-services.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Fulfillment" /> Services</h1>
                            <p className="text-text-gray text-md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. packages and web page editors now use Lorem Ipsum as their default model.</p>
                            <p className="text-text-gray text-md">Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using areIpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here content normal distribution of letters as opposed to here making readable making.</p>
                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                <BaseButton extraClass="flex !min-w-36 sm:w-max w-full justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton>
                            </div>

                        </div>
                    </div>

                </div>



                <GrowYourBusiness/>

                <div className="bg-white w-full">
                    <div className={`bg-white  p-8 flex flex-col gap-16 items-center `}>
                        <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">The Perfect <LinearGradientText text="Fulfillment Solution" /> for Growing Small Businesses </h1>
                        <div className="flex flex-col gap-8 sm:w-[80%] flex-wrap">
                            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 ">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/discount-rates.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Effortless Fulfillment Operations</p>
                                    </div>
                                    <p className="text-text-gray">Say goodbye to heavy lifting! Store your inventory in MGC Freight’s advanced warehouses where we handle order fulfillment, shipping, and hassle-free returns management.</p>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/parcel.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Cost-Efficient Fulfillment Solutions</p>
                                    </div>
                                    <p className="text-text-gray">Save on operational costs like staffing, warehouse expenses, and equipment fees. Let MGC Freight take care of fulfillment while you focus on growing your business and increasing ROI.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/home.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Nationwide Fulfillment Network</p>
                                    </div>
                                    <p className="text-text-gray">Lower shipping costs and shorten delivery times with our network of strategically located warehouses, reducing the distance to your customers.</p>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/import.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Live Inventory Tracking</p>
                                    </div>
                                    <p className="text-text-gray">Get real-time updates on your inventory with MGC Freight’s platform, ensuring accurate data across all channels for smarter inventory control and distribution.</p>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/office-building.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Scalable and Flexible Operations</p>
                                    </div>
                                    <p className="text-text-gray">Enjoy scalable solutions tailored to your needs, with no long-term commitments or excessive overheads. Perfect for businesses of all sizes and complexities.</p>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/shield.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Seamless Returns Management</p>
                                    </div>
                                    <p className="text-text-gray">Simplify reverse logistics with MGC Freight’s comprehensive returns solutions, including prepaid labels, streamlined processing, and detailed reports.</p>
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

            </div >
        </>
    )
}