'use client'
import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseInput from "@/components/common/forms/base-input";
import { useForm } from "react-hook-form";
import {  Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";



export default function TrackShipments() {
    const { control } = useForm()
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Track Shipments" /> </h1>
                            <p className="text-text-gray text-lg">Unlock Exclusive Rates for Specialized and Time-Sensitive Shipments</p>
                        </div>
                        <BaseBreadCrumb items={['Track Shipments']} />
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex items-start flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <div className="flex w-full">
                            <BaseInput placeholder="Enter Tracking Number" control={control} extraClass="flex-1 !rounded-r-none" classNames={{ inputWrapper: "rounded-r-none" }} />
                            <BaseButton extraClass="!rounded-l-none">Check Status</BaseButton>
                        </div>

                        <Table aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn>Transaction</TableColumn>
                                <TableColumn>Shipped On</TableColumn>
                                <TableColumn>Package Status</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1">
                                    <TableCell className="sm:!w-[40%] w-[20rem]">
                                        <div className="flex gap-4">
                                            <Image src={'/icons/shipment.svg'} alt="shipment" height={40} width={40} />
                                            <div className="flex flex-col">
                                                <p className="flex gap-2">#TOR6347247 <BiCopy className="text-base-blue text-lg" /></p>
                                                <p className="flex gap-2">#TOR6347247 <BiCopy className="text-base-blue text-lg" /></p>
                                                <p>LTL</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="sm:!w-[10%] w-[10rem]">10/16/24</TableCell>
                                    <TableCell className="sm:!w-[50%] w-[50rem]">
                                        <div className="p-4">
                                            <div className="flex relative">
                                                <hr className="flex-[1_0_52%] border-solid border-[0.45rem] border-b-0 border-base-blue rounded-full" />
                                                <hr className="flex-[1_0_15%] border-dotted bg-gray-100 border-b-0 border-[0.45rem] border-gray-200 rounded-full" />

                                                <div className="flex flex-col -top-2 -left-2 absolute">
                                                    <FaCheck className="bg-green-500 text-white rounded-full p-2 text-[1.8rem]" />
                                                    <p>Label Ready</p>
                                                </div>

                                                <div className="flex flex-col -top-2 left-1/3  absolute">
                                                    <FaCheck className="bg-green-500 text-white rounded-full p-2 text-[1.8rem]" />
                                                    <p>Pick up</p>
                                                </div>

                                                <div className="flex flex-col -top-2 left-[68%]  absolute">
                                                    <FaCheck className="bg-green-500 text-white rounded-full p-2 text-[1.8rem]" />
                                                    <p>In Transit</p>
                                                </div>

                                                <div className="flex flex-col -top-2 right-0 items-end absolute">
                                                    <div className="w-[1.7rem] bg-white  h-[1.7rem] border-2 border-base-blue rounded-full">
                                                    </div>
                                                    <p>Delivered</p>
                                                </div>

                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                </div>

            </div >
        </>
    )
}