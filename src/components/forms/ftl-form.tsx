'use client'

import { Checkbox, Radio, RadioGroup, Switch } from "@heroui/react"
import Image from "next/image"
// import { useState } from "react"
import BaseInput from "../common/forms/base-input"
import { useForm } from "react-hook-form"
import BaseSelect from "../common/forms/base-select"
import BaseButton from "../common/base-button"
import { PiWarningCircleFill } from "react-icons/pi";

export default function FTLForm() {
    // const [activeLevel, setActiveLevel] = useState(0)
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
                    <p className="text-base-purple font-semibold text-lg">Equipment</p>
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-1 p-4 justify-between border-base-teal border-1 rounded-lg">
                            <div className="flex flex-col gap-2 items-start ">
                                <Image src={'/icons/flatbed.svg'} width={100} height={100} alt="pallet" />
                                <div className="flex flex-col items-start">
                                    <p className="text-lg font-semibold">48’ Flatbed</p>
                                    <p className="text-sm">Dimensions: 48’ x 8’6” x 8’6”</p>
                                </div>
                            </div>
                            <Switch />
                        </div>

                        <div className="flex flex-1 p-4 justify-between border-base-teal border-1 rounded-lg">
                            <div className="flex flex-col gap-2 items-start ">
                                <Image src={'/icons/reefer.svg'} width={100} height={100} alt="pallet" />
                                <div className="flex flex-col items-start">
                                    <p className="text-lg font-semibold">53’ Reefer</p>
                                    <p className="text-sm">Dimensions: 53’ x 8’2” x 8’6”</p>
                                </div>
                            </div>
                            <Switch />
                        </div>


                        <div className="flex flex-1 p-4 justify-between border-base-teal border-1 rounded-lg">
                            <div className="flex flex-col gap-2 items-start ">
                                <Image src={'/icons/van.svg'} width={100} height={100} alt="pallet" />
                                <div className="flex flex-col items-start">
                                    <p className="text-lg font-semibold">53’ Dry van</p>
                                    <p className="text-sm">Dimensions: 53’ x 8’” x 9’</p>
                                </div>
                            </div>
                            <Switch />
                        </div>


                        <div className="flex flex-1 p-4 justify-between border-base-teal border-1 rounded-lg">
                            <div className="flex flex-col gap-2 items-start ">
                                <Image src={'/icons/van.svg'} width={100} height={100} alt="pallet" />
                                <div className="flex flex-col items-start">
                                    <p className="text-lg font-semibold">53’ Intermodal Container</p>
                                    <p className="text-sm">Dimensions: 53’ x 8’” x 9’</p>
                                </div>
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


                <div className="flex flex-col gap-4 items-start">
                    <div className="flex flex-col items-start">
                        <p className="text-base-purple font-semibold text-lg">Commodities:</p>
                        <p>For each commodity, please enter a weight (whole number in pounds) and description.</p>
                    </div>
                    <div className="flex gap-4 w-full">

                        <BaseInput className="max-w-40" classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Weight(lbs) *" labelPlacement="outside" placeholder="Enter Weight" />

                        <BaseInput className="flex-1" classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Description *" labelPlacement="outside" placeholder="Enter Description" />





                    </div>
                </div>


                <div className="flex flex-col gap-8 items-start">
                    <p className="text-base-purple font-semibold text-lg">Dimensions & Weight:</p>
                    <div className="flex gap-4 w-full ">
                        <BaseInput type="number" className="max-w-52" classNames={{ inputWrapper: "bg-transparent border-1 border-base-teal p-7 rounded-xl", label: "pb-2", input: "!text-base-blue" }} control={control} label="Pallet Quantity" labelPlacement="outside" placeholder="Enter " />
                        <div className="flex flex-col gap-4 items-start flex-1">
                            <p>Class & Density Calculator</p>
                            <RadioGroup classNames={{ wrapper: "!flex-row !flex-nowrap" }} className="w-full">
                                <Radio value={'434'}><div className="flex gap-2 items-center"><p>Metric ( cm & kg ) </p> <PiWarningCircleFill className="text-base-blue" /></div></Radio>
                                <Radio value={'4344'}>Imperial ( in & lbs )</Radio>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <p className="text-base-purple font-semibold text-md">Extra services:</p>
                        <Checkbox>Hazardous</Checkbox>

                    </div>


                    <div className="flex flex-col items-start w-full gap-4">
                        <p className="text-base-purple font-semibold text-md">Additional Service Options:</p>
                        <div className=" flex gap-4 w-full">
                            <Checkbox className="!flex-1 max-w-full">Air Ride</Checkbox>
                            <Checkbox className="!flex-1 max-w-full">Food grade</Checkbox>
                            <Checkbox className="!flex-1 max-w-full">Load Bars</Checkbox>
                            <Checkbox className="!flex-1 max-w-full">Straps</Checkbox>
                            <Checkbox className="!flex-1 max-w-full">Tarps</Checkbox>
                            <Checkbox className="!flex-1 max-w-full">Team</Checkbox>

                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <BaseButton extraClass="!p-6">Next</BaseButton>
                </div>
            </div>
        </div>
    )
}