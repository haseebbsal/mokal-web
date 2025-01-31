'use client'

import { Checkbox, Radio, RadioGroup, Switch } from "@heroui/react"
import Image from "next/image"
import { useState } from "react"
import BaseInput from "../common/forms/base-input"
import { useForm } from "react-hook-form"
import BaseSelect from "../common/forms/base-select"
import BaseButton from "../common/base-button"
import { PiWarningCircleFill } from "react-icons/pi"

export default function LTLForm() {
    const [activeLevel, setActiveLevel] = useState(0)
    const { control } = useForm()
    return (
        <div className="bg-base-blue rounded-xl flex flex-col border-1 border-base-teal gap-2 w-full">
            <div className="p-4 flex justify-center gap-2 w-1/2 m-auto items-center">
                <div className="flex gap-2">
                    <p className="text-white bg-[#6F93E1] min-w-7 min-h-6 rounded-full flex items-center justify-center">1</p>
                    <p className="text-[#6F93E1] text-lg font-semibold">Package</p>
                </div>
                <hr className="border-dashed flex-1 border-[0.08rem]" />
                <div className="flex gap-2">
                    <p className="text-gray-400 bg-text-beige min-w-7 min-h-6 rounded-full flex items-center justify-center">2</p>
                    <p className="text-text-beige text-lg font-semibold">Details</p>
                </div>
                <hr className="border-dashed flex-1 border-[0.08rem]" />
                <div className="flex gap-2">
                    <p className="text-gray-400 bg-text-beige min-w-7 min-h-6 rounded-full flex items-center justify-center">3</p>
                    <p className="text-text-beige text-lg font-semibold">Quote</p>
                </div>
            </div>

            <div className="bg-white rounded-xl p-8 flex flex-col gap-8">
                <div className="flex flex-col gap-4 items-start">
                    <p className="text-base-purple font-semibold text-lg">Select Your Package Type:</p>
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-1 p-4 justify-between border-base-teal border-1 rounded-lg">
                            <div className="flex gap-4 items-center">
                                <Image src={'/icons/pallet.svg'} width={30} height={30} alt="pallet" />
                                <p>Pallet</p>
                            </div>
                            <Switch />
                        </div>

                        <div className="flex flex-1 p-4 justify-between border-base-teal border-1 rounded-lg">
                            <div className="flex gap-4 items-center">
                                <Image src={'/icons/package.svg'} width={30} height={30} alt="pallet" />
                                <p>Package</p>
                            </div>
                            <Switch />
                        </div>


                        <div className="flex flex-1 p-4 justify-between border-base-teal border-1 rounded-lg">
                            <div className="flex gap-4 items-center">
                                <Image src={'/icons/courier-pack.svg'} width={30} height={30} alt="pallet" />
                                <p>Courier Pack</p>
                            </div>
                            <Switch />
                        </div>


                        <div className="flex flex-1 p-4 justify-between border-base-teal border-1 rounded-lg">
                            <div className="flex gap-4 items-center">
                                <Image src={'/icons/envelop-check.svg'} width={30} height={30} alt="pallet" />
                                <p>Envelop</p>
                            </div>
                            <Switch />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-start">
                    <p className="text-base-purple font-semibold text-lg">Shipping From:</p>
                    <div className="flex gap-4 w-full">

                        <BaseInput classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Postal / Zip Code *" labelPlacement="outside" placeholder="Enter Postal Code" />

                        <BaseSelect classNames={{ trigger: "p-7 bg-transparent border-1 border-base-teal rounded-xl", label: "pb-2", value: "!text-base-blue" }} label="Country *" labelPlacement="outside" placeholder="Select" />

                        <BaseSelect classNames={{ trigger: "p-7 bg-transparent border-1 border-base-teal rounded-xl", label: "pb-2", value: "!text-base-blue" }} label="Province *" labelPlacement="outside" placeholder="Select" />

                        <BaseSelect classNames={{ trigger: "p-7 bg-transparent border-1 border-base-teal rounded-xl", label: "pb-2", value: "!text-base-blue" }} label="City *" labelPlacement="outside" placeholder="Select" />

                        <BaseSelect classNames={{ trigger: "p-7 bg-transparent border-1 border-base-teal rounded-xl", label: "pb-2", value: "!text-base-blue" }} label="Location Type " labelPlacement="outside" placeholder="Select" />

                    </div>
                </div>


                <div className="flex flex-col gap-4 items-start">
                    <p className="text-base-purple font-semibold text-lg">Shipping To:</p>
                    <div className="flex gap-4 w-full">

                        <BaseInput classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Postal / Zip Code *" labelPlacement="outside" placeholder="Enter Postal Code" />

                        <BaseSelect classNames={{ trigger: "p-7 bg-transparent border-1 border-base-teal rounded-xl", label: "pb-2", value: "!text-base-blue" }} label="Country *" labelPlacement="outside" placeholder="Select" />

                        <BaseSelect classNames={{ trigger: "p-7 bg-transparent border-1 border-base-teal rounded-xl", label: "pb-2", value: "!text-base-blue" }} label="Province *" labelPlacement="outside" placeholder="Select" />

                        <BaseSelect classNames={{ trigger: "p-7 bg-transparent border-1 border-base-teal rounded-xl", label: "pb-2", value: "!text-base-blue" }} label="City *" labelPlacement="outside" placeholder="Select" />

                        <BaseSelect classNames={{ trigger: "p-7 bg-transparent border-1 border-base-teal rounded-xl", label: "pb-2", value: "!text-base-blue" }} label="Location Type " labelPlacement="outside" placeholder="Select" />

                    </div>
                </div>


                <div className="flex flex-col gap-8 items-start">
                    <p className="text-base-purple font-semibold text-lg">Dimensions & Weight:</p>
                    <div className="flex gap-4 w-full ">
                        <BaseInput type="number" className="max-w-52" classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Quantity" labelPlacement="outside" placeholder="Enter " />
                        <div className="flex flex-col gap-4 items-start flex-1">
                            <p>Class & Density Calculator</p>
                            <RadioGroup classNames={{wrapper:"!flex-row !flex-nowrap"}} className="w-full">
                                <Radio value={'434'}><div className="flex gap-2 items-center"><p>Metric ( cm & kg ) </p> <PiWarningCircleFill className="text-base-blue"/></div></Radio>
                                <Radio value={'4344'}>Imperial ( in & lbs )</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex gap-4 w-full">

                        <BaseInput classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Length (CM) *" labelPlacement="outside" placeholder="Enter " />

                        <BaseInput classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Width (CM) *" labelPlacement="outside" placeholder="Enter " />

                        <BaseInput classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Height (CM) *" labelPlacement="outside" placeholder="Enter " />

                        <BaseInput classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Weight (KG) *" labelPlacement="outside" placeholder="Enter " />

                        <BaseInput type="number" classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Freight Class " labelPlacement="outside" placeholder="Enter " />

                        <BaseInput type="number" classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Type " labelPlacement="outside" placeholder="Enter " />

                        <BaseInput classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Pieces" labelPlacement="outside" placeholder="Enter " />

                    </div>

                    <div className="flex gap-4">
                        <p className="text-base-purple font-semibold text-md">Extra services:</p>
                        <Checkbox>Express Delivery</Checkbox>
                        <Checkbox>Insurance</Checkbox>
                        <Checkbox>Packaging</Checkbox>
                        <Checkbox>Fragile</Checkbox>
                    </div>
                </div>

                <div className="flex justify-end">
                    <BaseButton extraClass="!p-6">Next</BaseButton>
                </div>
            </div>
        </div>
    )
}