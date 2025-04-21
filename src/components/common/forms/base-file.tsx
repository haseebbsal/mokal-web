'use client'

import { BaseFileProps } from "@/utils/types"

export default function BaseFile({ className, multiple ,label,labelClass,bgColor='bgWhite'}: BaseFileProps) {

    return (
        <div className={`${className} flex flex-col gap-2`}>
            {label && <p className={`text-sm ${labelClass}`}>{label}</p>}
            <div className={`relative ${bgColor} rounded-xl min-h-11 flex p-8 text-black justify-center items-center`}>
                <input id="file" type="file" accept={'.jpeg,.jpg,.png'} multiple={multiple} className="absolute opacity-0 z-0" />
                <label htmlFor="file" className="p-2 border-2 border-gray-200 bg-white rounded-lg relative z-10 cursor-pointer">Browse Files</label>
            </div>
        </div>
    )
}