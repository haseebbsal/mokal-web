'use client'

import { useForm } from "react-hook-form"
import BaseInput from "../common/forms/base-input"
import BaseButton from "../common/base-button"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

export default function GrowBusinessForm() {

    const { control } = useForm()
    return (
        <form className="flex flex-col gap-4 w-full">
            <div className="flex sm:gap-4 gap-8 flex-wrap">
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} label="First Name" labelPlacement="outside" placeholder="First Name" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} label="Last Name" labelPlacement="outside" placeholder="Last Name" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_100%]" control={control} label="Company Name" labelPlacement="outside" placeholder="Company Name" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} label="Phone Number" labelPlacement="outside" placeholder="Phone Number" />
                <BaseInput classNames={{ label: "!font-thin !text-sm" }} extraClass="flex-[1_0_40%]" control={control} type="email" label="Work Email" labelPlacement="outside" placeholder="Work Email" />
            </div>
            <BaseButton extraClass="w-max !min-w-[10rem] !flex !justify-between items-center">Help me Grow My Business <MdKeyboardDoubleArrowRight className="text-lg" /></BaseButton>
        </form>
    )
}