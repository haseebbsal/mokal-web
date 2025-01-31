import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";


export default function VideoLibrary() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Video Library" /> </h1>
                        </div>
                        <BaseBreadCrumb items={['Resources', 'Video Library']} />
                    </div>
                </div>

                <div className="bg-white w-full">
                    <div className={`flex flex-wrap m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                        <div className="flex flex-col items-start sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[30%] gap-2 text-start">
                            <Image src={'/images/video1.svg'} className="w-full max-h-56" alt="video1" width={300} height={300}/>
                            <p className="font-bold text-2xl">How to use Quick Quote feature</p>
                            <p className="text-text-gray text-sm">Full-truckload solutions for large, high-volume shipments.</p>
                        </div>

                        <div className="flex flex-col items-start sm:flex-[1_0_25%] flex-[1_0_100%]  sm:max-w-[30%] gap-2 text-start">
                            <Image src={'/images/video2.svg'} className="w-full max-h-56" alt="video1" width={300} height={300}/>
                            <p className="font-bold text-2xl">Notifications</p>
                            <p className="text-text-gray text-sm">Cost-effective shipping for smaller, non-full truckloads.</p>
                        </div>

                        <div className="flex flex-col items-start sm:flex-[1_0_25%] flex-[1_0_100%]  sm:max-w-[30%] gap-2 text-start">
                            <Image src={'/images/video3.svg'} className="w-full max-h-56" alt="video1" width={300} height={300}/>
                            <p className="font-bold text-2xl">Tickets & Support</p>
                            <p className="text-text-gray text-sm">Fast and efficient delivery to the final destination.</p>
                        </div>


                        <div className="flex flex-col items-start sm:flex-[1_0_25%] flex-[1_0_100%]  sm:max-w-[30%] gap-2 text-start">
                            <Image src={'/images/video4.svg'} className="w-full max-h-56" alt="video1" width={300} height={300}/>
                            <p className="font-bold text-2xl">Dashboard Usage Guide</p>
                            <p className="text-text-gray text-sm">End-to-end management of transportation for optimized logistics.</p>
                        </div>

                        <div className="flex flex-col items-start sm:flex-[1_0_25%] flex-[1_0_100%]  sm:max-w-[30%] gap-2 text-start">
                            <Image src={'/images/video5.svg'} className="w-full max-h-56" alt="video1" width={300} height={300}/>
                            <p className="font-bold text-2xl">How to book Pallet Shipment</p>
                            <p className="text-text-gray text-sm">Time-sensitive shipping to meet urgent delivery requirements.</p>
                        </div>

                        <div className="flex flex-col items-start sm:flex-[1_0_25%] flex-[1_0_100%]  sm:max-w-[30%] gap-2 text-start">
                            <Image src={'/images/video6.svg'} className="w-full max-h-56" alt="video1" width={300} height={300}/>
                            <p className="font-bold text-2xl">Shipment Cross Borders</p>
                            <p className="text-text-gray text-sm">End-to-end management of transportation for optimized logistics.</p>
                        </div>

                        <div className="flex flex-col items-start sm:flex-[1_0_25%] flex-[1_0_100%]  sm:max-w-[30%] gap-2 text-start">
                            <Image src={'/images/video7.svg'} className="w-full max-h-56" alt="video1" width={300} height={300}/>
                            <p className="font-bold text-2xl">Pickup Feature</p>
                            <p className="text-text-gray text-sm">Time-sensitive shipping to meet urgent delivery requirements.</p>
                        </div>

                        <div className="flex flex-col items-start sm:flex-[1_0_25%] flex-[1_0_100%]  sm:max-w-[30%] gap-2 text-start">
                            <Image src={'/images/video8.svg'} className="w-full max-h-56" alt="video1" width={300} height={300}/>
                            <p className="font-bold text-2xl">Shipment tracking</p>
                            <p className="text-text-gray text-sm">Global logistics services for international freight.</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}