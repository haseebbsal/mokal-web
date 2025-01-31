import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import CourierService from "@/components/page-components/courier-service";
import ExpertLogistics from "@/components/page-components/expert-logistics";
import GuideToBook from "@/components/page-components/guide-to-book";
import BenefitsOfServices from "@/components/page-components/benefits-of-services";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseSlider from "@/components/common/base-slider";
import Link from "next/link";




const responsiveCouriers = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
        partialVisibilityGutter: 2000
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 2000
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 2000
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        partialVisibilityGutter: 2000
    }
};

export default function LTL() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Less Than Truckload (LTL)" /> </h1>
                            <p className="text-text-gray text-lg">Tailored Solutions and Competitive Pricing from Trusted Carriers</p>
                        </div>
                        <BaseBreadCrumb items={['Services', 'Less Than Truckload (LTL)']} />
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

                    <div className="bg-white w-full">
                        <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
                            <h1 className="font-bold sm:text-[2.3rem] text-[1.5rem]">Trusted Courier Partner Solutions for <LinearGradientText text="Seamless Deliveries" /></h1>
                            <p className="text-text-gray">Enhance your shipping capabilities with MGC Freight’s reliable courier partnerships. We ensure timely deliveries, secure handling, and exceptional service, providing your business with the flexibility and efficiency needed to satisfy your customers every step of the way.</p>
                            <div className="w-full sm:flex hidden gap-2 flex-wrap justify-center">
                                <Image src={'/couriers/DHL.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/DayandRoss.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Canpar.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/gardewine.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/kindersley.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/M-O-2.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Artboard.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Morneau.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/FedEx-1.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/GLS.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/apex.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/ExcelTransportation.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Fastfrate.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/UPS.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Polaris.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Moto.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Purolator-1.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/ab-courier.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/OneforFreight.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/midland-freightcom-1.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/minimax-freightcom.jpg.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/TForce.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/overland.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/western-canada.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/reddaway-freightcom-1.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/USPS.svg.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/transkid-freightcom.jpg.svg'} alt="dhl" width={150} height={150} />
                            </div>
                            <BaseSlider extraClass="sm:hidden" extraResponsive={responsiveCouriers}>
                                <Image src={'/couriers/DHL.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/DayandRoss.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Canpar.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/gardewine.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/kindersley.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/M-O-2.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Artboard.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Morneau.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/FedEx-1.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/GLS.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/apex.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/ExcelTransportation.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Fastfrate.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/UPS.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Polaris.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Moto.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Purolator-1.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/ab-courier.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/OneforFreight.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/midland-freightcom-1.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/minimax-freightcom.jpg.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/TForce.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/overland.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/western-canada.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/reddaway-freightcom-1.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/USPS.svg.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/transkid-freightcom.jpg.svg'} alt="dhl" width={100} height={100} />
                            </BaseSlider>
                        </div>
                    </div>

                </div>

                <div>

                    <BenefitsOfServices />


                    <ExpertLogistics />

                </div>


                <GuideToBook />

                <CourierService />


                <HearFromUsAndBlogs hideBlogs={true} />
            </div >
        </>
    )
}