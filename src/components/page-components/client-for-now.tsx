'use client'

import Image from "next/image"
import BaseInput from "../common/forms/base-input"
import BaseButton from "../common/base-button"
import LinearGradientText from "../common/linear-gradient-text"
import { useForm } from "react-hook-form"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

export default function ReactOut() {
    const { control } = useForm()
    return (
            <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 bg-white py-16 sm:w-[80%] shadow-lg rounded-xl text-center sm:gap-16 gap-8`}>
                <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                    <Image src={'/images/broker (1).svg'} alt="broker" width={200} height={200} />
                    <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Discover the MGC Freight Advantage" /></h1>
                    <p className="text-text-gray text-md">Our tailored shipping solutions empower businesses of all sizes with speed, reliability, and significant cost savings on pallet, parcel, PAK, and envelope shipping.
                        At MGC Freight, we offer a wide range of LTL and courier services, including local, cross-border, and international shipping. From eCommerce support to white-glove delivery and specialized freight handling, you’ll enjoy discounted rates from North America’s most trusted carriers.
                        Ready to see how MGC Freight can transform your shipping operations? Fill out the form on this page to schedule a demo, and one of our Shipping Experts will connect with you to show how we can help your business grow with smarter, streamlined shipping solutions.</p>
                </div>
                <div className="flex bg-base-shadeBlue p-8 rounded-xl flex-col gap-8 flex-1 items-start">
                    <h1 className="text-2xl font-semibold">Reach Out to a Broker Representative</h1>
                    <BaseInput extraClass="" control={control} placeholder="First Name" label="First Name *" labelPlacement="outside" />
                    <BaseInput extraClass="" control={control} placeholder="Last Name" label="Last Name *" labelPlacement="outside" />
                    <BaseInput extraClass="" control={control} placeholder="Company Name" label="Company Name *" labelPlacement="outside" />
                    <BaseInput extraClass="" type="email" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                    <BaseInput extraClass="" control={control} placeholder="Phone Number" label="Phone Number *" labelPlacement="outside" />

                    <BaseButton extraClass="!py-6">Become a Broker Partner <MdKeyboardDoubleArrowRight /></BaseButton>
                </div>
            </div>

    )
}