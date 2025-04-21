import Image from "next/image";
import NoOpenPositionForm from "./no-open-position";

export default function NoOpenForm() {
    return (
        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%]  text-center gap-4`}>
            <div className="flex flex-col gap-4 relative z-10 flex-1 text-start text-white">
                <Image src={'/logo-fullWhite.svg'} alt="logo full White" height={600} width={600} />
                <h1 className="sm:text-[2.3rem] text-[1.3rem] font-bold">No Open Position That Fits?</h1>
                <NoOpenPositionForm/>
            </div>
            <div className="flex-1">
                <Image className=" h-full w-full " src={'/images/open-position.svg'} alt="grows" width={600} height={600} />

            </div>
        </div>
    )
}