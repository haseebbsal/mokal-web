import Image from "next/image";
import LinearGradientText from "../common/linear-gradient-text";
import BaseButton from "../common/base-button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CourierServiceProps } from "@/utils/types";

export default function CourierService({bgColor='bg-base-shadeBlue'}:CourierServiceProps) {
    return (
        <div className={`${bgColor}  p-8 flex flex-col gap-16 items-center `}>
            <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Courier <LinearGradientText text="Service Solutions" /> that Fit Your Business</h1>
            <div className="flex flex-col gap-8 sm:w-[80%] flex-wrap">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 ">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <Image src={'/icons/flexiblie-shipping.svg'} alt="flexible" width={40} height={40} />
                            <p className="text-base-blue text-xl font-semibold">Flexible Shipping Options</p>
                        </div>
                        <p className="text-text-gray">Enjoy the freedom to ship without long-term obligations or hidden fees. Perfect for businesses of all sizes.</p>
                    </div>


                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <Image src={'/icons/discount-rates.svg'} alt="flexible" width={40} height={40} />
                            <p className="text-base-blue text-xl font-semibold">Special Discounted Rates</p>
                        </div>
                        <p className="text-text-gray">Unlock exclusive, cost-saving rates tailored to your shipping needs. Save more on every shipment.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <Image src={'/icons/efficient-time.svg'} alt="flexible" width={40} height={40} />
                            <p className="text-base-blue text-xl font-semibold">Efficient Time Management</p>
                        </div>
                        <p className="text-text-gray">Streamline your logistics and focus on your business while we handle the shipping process.</p>
                    </div>


                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <Image src={'/icons/billing.svg'} alt="flexible" width={40} height={40} />
                            <p className="text-base-blue text-xl font-semibold">Simplified Billing Solutions</p>
                        </div>
                        <p className="text-text-gray">Manage all your shipping expenses in one easy-to-read invoice. No more multiple bills to track.</p>
                    </div>



                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <Image src={'/icons/pickup.svg'} alt="flexible" width={40} height={40} />
                            <p className="text-base-blue text-xl font-semibold">Hassle-Free Pickup Scheduling</p>
                        </div>
                        <p className="text-text-gray">Schedule pickups at your convenience with a few clicks. Say goodbye to unnecessary delays.</p>
                    </div>



                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <Image src={'/icons/shipping-protection.svg'} alt="flexible" width={40} height={40} />
                            <p className="text-base-blue text-xl font-semibold">Comprehensive Shipment Protection</p>
                        </div>
                        <p className="text-text-gray">Protect your packages with reliable shipping insurance for complete peace of mind.</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-center w-full flex-wrap">
                    <BaseButton extraClass="flex sm:w-max w-full !min-w-52 justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                    <BaseButton extraClass="flex sm:w-max w-full !min-w-36 justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton>
                </div>
            </div>

        </div>
    )
}