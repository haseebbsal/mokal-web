import BaseButton from "@/components/common/base-button";
import Image from "next/image";
import { BsBoxSeam } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HomePageTabs, managementPlatformTabs } from "@/utils/constants";
import LinearGradientText from "@/components/common/linear-gradient-text";
import BaseTabs from "@/components/common/base-tabs";
import ReasonsToChooseUs from "@/components/page-components/reasons-to-choose-us";
import LinearGradientCircle from "@/components/common/linear-gradient-circle";
import FAQS from "@/components/page-components/faqs";
import RefineTransportForm from "@/components/forms/refine-transport-form";

export default function Home() {
  return (
    <>
      <div className={`flex flex-col gap-4`}>
        <div className="flex flex-col gap-8">
          <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
            <div className="px-16 py-2 border-2 rounded-lg flex gap-2 items-center w-max bg-white text-text-gray  ">
              <p className="font-bold ">Welcome to MGC FREIGHT</p>
              <BsBoxSeam className="text-base-purple" />
            </div>
            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold">The Modern Freight <LinearGradientText text="Solution" /> for Your Business in One Place</h1>
            <p className="text-gray-600 sm:text-lg text-md">Seamlessly manage logistics and operations with a complete freight solution tailored for your business needs.</p>
            <div className="flex gap-2">
              <BaseButton>Get Started Today<MdKeyboardDoubleArrowRight className="text-lg" /></BaseButton>
              <BaseButton extraClass="bg-transparent text-base-purple border-2  border-base-purple">Get A Quote<MdKeyboardDoubleArrowRight className="text-lg" /></BaseButton>
            </div>
          </div>
          <div className={`sm:px-8 px-4 py-4 flex justify-center  `}>
            <Image src="/images/dashboard.svg" alt="dashboard" width={1000} height={1000} className="" />
          </div>
        </div>

        <div className="bg-white">
          <div className={`flex flex-col items-center m-auto sm:px-8 px-4 sm:py-20 py-16  text-center gap-4`}>
            <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Complete <LinearGradientText text="Freight & Logistics" /> Solutions</h1>
            <div className="flex flex-col sm:w-[80%] w-full gap-4">
              <BaseTabs keys={HomePageTabs} />
            </div>
          </div>
        </div>

        <ReasonsToChooseUs />

        <div className="bg-white w-full">
          <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
            <Image className="flex-1" src={'/images/metrics.svg'} alt="metrics" width={500} height={500} />
            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
              <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">Your <LinearGradientText extraClass="" text="Shipping Metrics" />, Simplified</h1>
              <p className="text-text-gray text-md">Gain real-time insights into your shipping performance with detailed metrics, helping you track, analyze, and optimize every aspect of your freight operations.</p>
              <div className="flex ">
                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                  <Image src={'/icons/hand.svg'} alt="hand" width={40} height={40} />
                  <h2 className="font-bold">Best Rates</h2>
                  <p className="text-text-gray">Best Shipping rates across all the freights</p>
                </div>
                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                  <Image src={'/icons/globe-search.svg'} alt="globe search" width={40} height={40} />
                  <h2 className="font-bold">15% at Least</h2>
                  <p className="text-text-gray">Average Shipping Cost Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-shadeBlue  p-8 flex flex-col w-full gap-4 items-center ">
          <h1 className="sm:text-[2.3rem] text-[1.5rem] text-center font-bold">Powered by Our Robust, Innovative Shipping <LinearGradientText text="Management Platform" /></h1>
          <div className="sm:w-[80%] w-full">
            <BaseTabs keys={managementPlatformTabs} />
          </div>
        </div>


        <div className="bg-white w-full">
          <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
            <div className="flex sm:order-0 order-2 flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
              <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">Track Your Shipments <LinearGradientText extraClass="" text="Over Time" /></h1>
              <p className="text-text-gray text-md">Visualize your shipping trends with interactive graphs, providing you with valuable insights to monitor performance and optimize delivery timelines.</p>
              <div className="flex ">
                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                  <h2 className="font-bold text-3xl">15.1K+</h2>
                  <p className="text-text-gray">Total Shipments Tracked Overtime</p>
                </div>
                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                  <h2 className="font-bold text-3xl">105K</h2>
                  <p className="text-text-gray">Shipments Delivered Overtime</p>
                </div>
              </div>
            </div>
            <Image className="order-0 sm:order-2 flex-1" src={'/images/track-shipments.svg'} alt="metrics" width={500} height={500} />
          </div>
        </div>


        <div className="bg-base-shadeBlue  p-8  w-full">
          <div className="sm:w-[80%] m-auto flex flex-col  gap-4 items-center">
            <h1 className="sm:text-[2.3rem] text-[1.5rem] text-center font-bold">All Your <LinearGradientText text="Freight Operations" /> in One Platform </h1>
            <p className="text-text-gray text-center">There are many solutions available, but most are limited in scope. MGC Freight brings together tracking, cost optimization, and logistics management, offering a seamless experience for your business needs.</p>
            <div className="flex gap-4 flex-wrap w-full">
              <div className=" bg-base-lightBlue   relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                <div className="flex flex-col gap-2 relative z-30">
                  <h1 className="font-bold text-base-blue sm:text-2xl text-lg" >Global Shipping Made Simple</h1>
                  <p className="text-text-lighterDarkBlue">Effortlessly manage logistics with end-to-end supply chain precision across air, sea, and land.</p>
                  <Image src={'/images/shipment1.svg'} alt="shipment1" width={500} className="w-full sm:h-[15rem]" height={500} />
                </div>
                <LinearGradientCircle />
              </div>

              <div className=" bg-linearPurple  relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                <div className="flex flex-col gap-2 relative z-30">
                  <h1 className="font-bold text-base-purple sm:text-2xl text-lg ">Global Connections, Local Deliveries</h1>
                  <p className="text-base-purple">Effortlessly manage logistics with end-to-end supply chain precision across air, sea, and land.</p>
                  <Image src={'/images/shipment2.svg'} alt="shipment2" width={500} className="w-full sm:h-[15rem]" height={500} />
                </div>
                <LinearGradientCircle />
              </div>

              <div className=" bg-linearBlue p-8 flex sm:flex-row flex-col sm:gap-8 gap-4 items-center rounded-xl w-full">
                <div className="flex flex-1 text-white flex-col sm:gap-8 gap-4 relative z-30">
                  <h1 className="font-bold  sm:text-4xl text-lg">Connecting the World Through Logistics</h1>
                  <p className="">Streamline your global supply chain with reliable shipping solutions by air, land, and sea. From small parcels to large freight, our network ensures fast, efficient, and secure delivery to every corner of the world.</p>
                  <div className="sm:flex hidden gap-8">
                    <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                    <BaseButton className="flex min-w-[10rem] !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                  </div>
                </div>
                <div className=" flex-1 flex flex-col gap-2">
                  <Image src={'/images/shipment.svg'} alt="shipment" width={100} className="w-full h-full" height={100} />
                  <div className="flex sm:hidden gap-2 flex-wrap">
                    <BaseButton className="flex min-w-[10rem] sm:w-max w-full bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                    <BaseButton className="flex min-w-[10rem] sm:w-max w-full !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FAQS/>

        {/* <div className="bg-base-shadeBlue w-full">
          <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
            <h1 className="font-bold sm:text-[2.3rem] text-[1.5rem]">Our Customer Base Reaches <LinearGradientText text="Worldwide" /></h1>
            <div className="w-full">
              <Image src={'/images/map.svg'} alt="map" width={1000} height={1000} className="w-full"/>
            </div>
          </div>
        </div> */}

        <div className="bg-linearBlue w-full relative overflow-hidden">
          <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%]  text-center gap-4`}>
            <div className="flex flex-col gap-4 relative z-10 text-start sm:w-1/2 text-white">
              <Image src={'/logo-fullWhite.svg'} alt="logo full White" height={600} width={600} />
              <h1 className="sm:text-[2.3rem] text-[1.3rem] font-bold">REFINING TRANSPORTATION</h1>
              <RefineTransportForm />
            </div>
            <Image className="absolute right-0 top-0 z-0 h-full sm:block hidden" src={'/images/dashboard1.svg'}  alt="dashboard1" width={700} height={600} />
          </div>
        </div>

      </div>
    </>
  );
}
