'use client'
import { AccordionItem } from "@heroui/react";
import BaseAccordion from "../common/base-accordion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { faqs } from "@/utils/constants";
import LinearGradientText from "../common/linear-gradient-text";

export default function FAQS() {
    return (

        <div className="bg-white w-full">
            <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
                <h1 className="font-bold sm:text-[2.3rem] text-[1.5rem]">Frequently Asked <LinearGradientText text="Questions" /></h1>
                <p className="text-text-gray">Get quick answers to your questions and streamline your freight experience with MGC Freight.</p>
                <BaseAccordion variant="splitted" selectionMode="multiple">
                    {faqs.map((e) => <AccordionItem key={e.title} classNames={{ title: "font-semibold", base: "border-1 border-gray-200" }} indicator={({ isOpen }) => (isOpen ? <BiMinus className="rotate-90 text-base-blue" /> : <BiPlus className="text-base-blue" />)} title={e.title}>
                        <p className="text-text-gray text-start ">{e.content}</p>
                    </AccordionItem>)}
                </BaseAccordion>
            </div>
        </div>

    )
}