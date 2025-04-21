'use client'

import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import BaseButton from "../common/base-button"
import BaseInput from "../common/forms/base-input"
import BaseSelect from "../common/forms/base-select"
import LinearGradientText from "../common/linear-gradient-text"
import { useForm } from "react-hook-form"

export default function BookADemoForm() {
    const { control } = useForm()

    return (
        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] shadow-lg rounded-xl text-center sm:gap-16 gap-8`}>
            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Discover the MGC Freight Advantage" /></h1>
                <p className="text-text-gray text-md">Our tailored shipping solutions empower businesses of all sizes with speed, reliability, and significant cost savings on pallet, parcel, PAK, and envelope shipping.
                    At MGC Freight, we offer a wide range of LTL and courier services, including local, cross-border, and international shipping. From eCommerce support to white-glove delivery and specialized freight handling, you’ll enjoy discounted rates from North America’s most trusted carriers.
                    Ready to see how MGC Freight can transform your shipping operations? Fill out the form on this page to schedule a demo, and one of our Shipping Experts will connect with you to show how we can help your business grow with smarter, streamlined shipping solutions.</p>
            </div>
            <div className="flex flex-col gap-8 flex-1 items-start">
                <h1 className="text-2xl font-semibold">Reach Out to Book a Demo</h1>
                <BaseSelect label="Select Region *" labelPlacement="outside" placeholder="Select" />
                <BaseSelect label="Type of Shipment *" labelPlacement="outside" placeholder="Pallets" />
                <BaseSelect label="Shipment Ratio *" labelPlacement="outside" placeholder="10 - 15 Shipments" />
                <BaseInput extraClass="" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                <BaseButton extraClass="!py-6">Start Booking <MdKeyboardDoubleArrowRight /></BaseButton>
            </div>
        </div>
    )
}