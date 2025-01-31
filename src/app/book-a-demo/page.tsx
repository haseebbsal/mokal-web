'use client'
import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseInput from "@/components/common/forms/base-input";
import { useForm } from "react-hook-form";
import BaseSelect from "@/components/common/forms/base-select";


export default function BookADemo() {
    const { control } = useForm()
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Book a Demo" /> </h1>
                            <p className="text-text-gray text-lg">Unlock Exclusive Rates for Specialized and Time-Sensitive Shipments</p>
                        </div>
                        <BaseBreadCrumb items={['Book a Demo']} />
                    </div>
                </div>

                <div className="flex flex-col gap-8 bg-white py-16">

                    <div className="bg-white w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] shadow-lg rounded-xl text-center sm:gap-16 gap-8`}>
                            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                                <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Discover the MGC Freight Advantage" /></h1>
                                <p className="text-text-gray text-md">Our tailored shipping solutions empower businesses of all sizes with speed, reliability, and significant cost savings on pallet, parcel, PAK, and envelope shipping.
                                    At MGC Freight, we offer a wide range of LTL and courier services, including local, cross-border, and international shipping. From eCommerce support to white-glove delivery and specialized freight handling, you’ll enjoy discounted rates from North America’s most trusted carriers.
                                    Ready to see how MGC Freight can transform your shipping operations? Fill out the form on this page to schedule a demo, and one of our Shipping Experts will connect with you to show how we can help your business grow with smarter, streamlined shipping solutions.</p>
                            </div>
                            <div className="flex flex-col gap-8 flex-1 items-start">
                                <h1 className="text-2xl font-semibold">Reach Out to Book a Demo</h1>
                                <BaseSelect label="Select Region *" labelPlacement="outside" placeholder="Select"/>
                                <BaseSelect label="Type of Shipment *" labelPlacement="outside" placeholder="Pallets"/>
                                <BaseSelect label="Shipment Ratio *" labelPlacement="outside" placeholder="10 - 15 Shipments"/>
                                <BaseInput extraClass="" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                                <BaseButton extraClass="!py-6">Start Booking <MdKeyboardDoubleArrowRight /></BaseButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}