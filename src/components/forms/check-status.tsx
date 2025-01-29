'use client'

import { FieldValues, useForm } from "react-hook-form"
import BaseInput from "../common/forms/base-input"
import BaseButton from "../common/base-button"

export default function CheckStatusForm() {
    const {control,handleSubmit}=useForm()

    const checkStatusSubmit=(e:FieldValues)=>{
        console.log(e)
    }

    return (
        <form  onSubmit={handleSubmit(checkStatusSubmit)} className="flex sm:flex-[0.8_0_0] flex-1">
                <BaseInput classNames={{inputWrapper:"!rounded-r-none !h-full"}}  control={control} placeholder="Enter Tracking Number" />
                <BaseButton extraClass="rounded-l-none" type="submit">Check Status</BaseButton>
        </form>
    )
}