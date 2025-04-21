'use client'

import { countriesType } from "@/utils/types"
import dynamic from "next/dynamic"


const DynamicMap=dynamic(()=>import('./dynamic-map'),{ssr:false})
export default function CustomMap({data}:{data:countriesType}) {
    return (
       <DynamicMap data={data}/>
    )
}