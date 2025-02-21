'use client'

import { AccordionItem } from "@heroui/react"
import BaseAccordion from "../common/base-accordion"
import { BiMinus, BiPlus } from "react-icons/bi"

export default function AccordionFaqs({questions}:{questions:{answer:string,question:string}[]}) {
    return (
        <BaseAccordion variant="splitted" selectionMode="multiple">
            {questions.map((e) => <AccordionItem key={e.question} classNames={{ title: "font-semibold", base: "border-1 border-gray-200" }} indicator={({ isOpen }) => (isOpen ? <BiMinus className="rotate-90 text-base-blue" /> : <BiPlus className="text-base-blue" />)} title={e.question}>
                <p className="text-text-gray text-start ">{e.answer}</p>
            </AccordionItem>)}
        </BaseAccordion>
    )
}