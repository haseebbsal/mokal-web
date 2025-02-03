'use client'

import { useForm } from "react-hook-form"
import BaseInput from "../common/forms/base-input"
import BaseFile from "../common/forms/base-file"
import BaseCheckBox from "../common/forms/base-checkbx"
import BaseButton from "../common/base-button"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

export default function RefineTransportForm() {

    const { control } = useForm()
    return (
        <form className="flex flex-col gap-4">
            <div className="flex sm:gap-4 gap-8 flex-wrap">
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} label="First Name" labelPlacement="outside" placeholder="First Name" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} label="Last Name" labelPlacement="outside" placeholder="Last Name" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} label="Phone Number" labelPlacement="outside" placeholder="Phone Number" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} type="email" label="Work Email" labelPlacement="outside" placeholder="Work Email" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} label="Company Name" labelPlacement="outside" placeholder="Company Name" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} label="MC / DOT / CVOR / Registration Number" labelPlacement="outside" placeholder="# 000000" />
                <BaseFile bgColor="bg-gray-200" label="Carrier package" labelClass="font-bold" multiple={true} className="w-full" />
            </div>
            <div className="flex gap-4">
                <BaseCheckBox>Shippers</BaseCheckBox>
                <BaseCheckBox>Carriers</BaseCheckBox>
            </div>
            <BaseButton extraClass="w-max !min-w-[10rem] !flex !justify-between items-center">Contact Us <MdKeyboardDoubleArrowRight className="text-lg" /></BaseButton>
        </form>
    )
}