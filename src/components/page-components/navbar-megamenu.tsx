'use client'
import {megaMenu } from "@/utils/constants";
import Image from "next/image";
import BaseButton from "../common/base-button";
import { MegaMenuProps } from "@/utils/types";
import { useRouter } from "next/navigation";

export default function MegaMenu({show}:MegaMenuProps) {
    const router=useRouter()
    return (
        <div className={`${show != null ? "sm:block hidden" : "hidden"} relative w-full `}>
            <div className={`sm:px-8 px-4 py-4  absolute top-0 z-[99] w-full left-0`}>
                <div className="min-h-[10rem] shadow-[5px_10px_25px_grey] bg-white grid grid-cols-[2fr_1fr] rounded-lg p-8">
                    {megaMenu[Number(show)] && <div className="border-r-2 grid grid-cols-3 grid-rows-[0.3fr_0.3fr_0.3fr] p-4 gap-4 border-blue-200">
                        {megaMenu[Number(show)].map((e, index) => <div key={e.title + index} onClick={()=>router.push(e.link)} className="flex items-center gap-4 cursor-pointer">
                            <Image key={e.icon} src={e.icon} alt="icon" width={50} height={50} />
                            <div className="flex flex-col gap-1">
                                <p className="font-bold text-md">{e.title}</p>
                                <p className="text-sm">{e.description}</p>
                            </div>
                        </div>)}
                    </div>}

                    <div className="p-8 flex  justify-center">
                        <div className="relative">
                            <Image src={'/gifs/main.gif'} alt="mega" className="min-h-[18rem]" width={400} height={200} />

                            <div className="absolute bottom-10 left-4 flex flex-col gap-2">
                                <Image src={'/logo-white.svg'} alt="icon white" width={200} height={200} />
                                <BaseButton className="bg-transparent border-2 rounded-3xl w-max border-white text-white">Book a Demo</BaseButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}