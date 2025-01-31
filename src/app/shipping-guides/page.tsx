import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import { benefitsForMgc, optimalModes } from "@/utils/constants";
import GuideToBook from "@/components/page-components/guide-to-book";


export default function ShippingGuides() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Shipping Guides" /> </h1>
                        </div>
                        <BaseBreadCrumb items={['Resources', 'Shipping Guides']} />
                    </div>
                </div>

                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Optimal Modes" />  To Fit Your Needs </h1>
                            <p className="text-text-gray text-md">MGC FREIGHT’s truckload services deliver reliable results every time. Our goal is always to move freight as efficiently as possible, including combining multiple modes into a single solution. From Dry van to cross-border and everything in between, our customized over the road solutions are guaranteed to fit your needs. Our carriers are a dependable source of drivers and equipment, especially in tight market conditions.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                {optimalModes.map((e) => <div key={e} className="flex gap-4 items-center">
                                    <div className="p-[0.3rem] border-2 border-base-lightBlue  bg-base-blue rounded-full">
                                    </div>
                                    <p>{e}</p>
                                </div>)}
                            </div>
                        </div>
                        <Image className="flex-1" src={'/images/shipping-guide.svg'} alt="truckload" width={500} height={500} />
                    </div>
                </div>


                <div className="bg-base-shadeBlue w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                        <Image className="flex-1" src={'/images/shipping-guide-container.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold">Benefits for MGC FREIGHT <LinearGradientText extraClass="" text="Independent Contractors" /> </h1>
                            <p className="text-text-gray text-md">Unlock tons of benefits when you apply to join MGC FREIGHT as a contract motor carrier. MGC FREIGHT gives carriers the tools they need to remain in control of their contracted lanes:</p>
                            <div className="grid grid-cols-1 gap-4 w-full">
                                {benefitsForMgc.map((e) => <div key={e} className="flex gap-4 items-center">
                                    <div className="p-[0.3rem] border-2 border-base-lightBlue  bg-base-blue rounded-full">
                                    </div>
                                    <p>{e}</p>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>


               <GuideToBook/>
            </div>
        </>
    )
}