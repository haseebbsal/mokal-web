'use client'
import { ReactNode } from "react";
import LinearGradientText from "../common/linear-gradient-text";
// import CustomMap from "./custom-map";
import dynamic from "next/dynamic";
const CustomMap=dynamic(()=>import('./custom-map'),{ssr:false})
export default function CustomerBase({heading=<h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Our Customer Base Reaches  <LinearGradientText extraClass="" text="Worldwide" /></h1>}:{heading?:ReactNode}) {
    return (
        <div className="w-full">
            <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
                {heading}
            </div>
            <CustomMap />

        </div>
    )
}