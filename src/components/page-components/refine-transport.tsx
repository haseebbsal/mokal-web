import Image from "next/image";
import RefineTransportForm from "../forms/refine-transport-form";

export default function RefineTransport() {
    return (
        <div className="bg-linearBlue w-full relative overflow-hidden">
            <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%]  text-center gap-4`}>
                <div className="flex flex-col gap-4 relative z-10 text-start sm:w-1/2 text-white">
                    <Image src={'/logo-fullWhite.svg'} alt="logo full White" height={600} width={600} />
                    <h1 className="sm:text-[2.3rem] text-[1.3rem] font-bold">REFINING TRANSPORTATION</h1>
                    <RefineTransportForm />
                </div>
                <Image className="absolute right-0 top-0 z-0 h-full sm:block hidden" src={'/images/dashboard1.svg'} alt="dashboard1" width={700} height={600} />
            </div>
        </div>
    )
}