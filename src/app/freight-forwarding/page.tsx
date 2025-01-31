import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import CourierService from "@/components/page-components/courier-service";
import ExpertLogistics from "@/components/page-components/expert-logistics";
import GrowYourBusiness from "@/components/page-components/grow-your-business";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import Link from "next/link";


export default function FreightForwarding() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Freight Forwarding" /> </h1>
                            <p className="text-text-gray text-lg">Tailored Solutions and Competitive Pricing from Trusted Carriers</p>
                        </div>
                        <BaseBreadCrumb items={['Services', 'Freight Forwarding']} />
                    </div>
                </div>

                <div className="bg-white w-full">

                    <div className="bg-white w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                            <Image className="flex-1" src={'/images/ltl-shipping.svg'} alt="truckload" width={500} height={500} />
                            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                                <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Less Than Truckload (LTL)" /> Shipping Services </h1>
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

                </div>


                <ExpertLogistics />

                <CourierService bgColor="bg-white" />

                <HearFromUsAndBlogs hideBlogs={true} bgHearFromUs="bg-base-shadeBlue" />

                <GrowYourBusiness />

                <HearFromUsAndBlogs hideHearFromUs={true} />

            </div >
        </>
    )
}