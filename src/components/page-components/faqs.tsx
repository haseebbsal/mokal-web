'use client'
import { AccordionItem } from "@heroui/react";
import BaseAccordion from "../common/base-accordion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { faqs } from "@/utils/constants";

export default function FAQS() {
    return (
        <BaseAccordion variant="splitted" selectionMode="multiple">
            {faqs.map((e) => <AccordionItem key={e.title} classNames={{ title: "font-semibold", base: "border-1 border-gray-200" }} indicator={({ isOpen }) => (isOpen ? <BiMinus className="rotate-90 text-base-blue" /> : <BiPlus className="text-base-blue" />)} title={e.title}>
                <p className="text-text-gray text-start ">{e.content}</p>
            </AccordionItem>)}
        </BaseAccordion>
    )
}